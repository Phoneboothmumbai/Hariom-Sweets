#!/bin/bash

# Hariom Sweets - Complete Vultr Deployment
# Run this on fresh Vultr Ubuntu server

set -e

echo "🚀 Starting Hariom Sweets deployment on Vultr..."

# Update system
echo "📦 Updating system..."
apt-get update
apt-get upgrade -y

# Install Node.js 18
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Install Python
echo "📦 Installing Python..."
apt-get install -y python3 python3-pip python3-venv

# Install MongoDB
echo "📦 Installing MongoDB..."
curl -fsSL https://www.mongodb.org/static/pgp/server-7.0.asc | gpg --dearmor -o /usr/share/keyrings/mongodb-server-7.0.gpg
echo "deb [ arch=amd64,arm64 signed-by=/usr/share/keyrings/mongodb-server-7.0.gpg ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-7.0.list
apt-get update
apt-get install -y mongodb-org

# Install Nginx
echo "📦 Installing Nginx..."
apt-get install -y nginx

# Install global npm packages
echo "📦 Installing global packages..."
npm install -g yarn pm2

# Start MongoDB
echo "🔧 Starting MongoDB..."
systemctl start mongod
systemctl enable mongod

# Clone repository
echo "📥 Cloning repository..."
cd /var/www
rm -rf hariom-sweets
git clone https://github.com/Phoneboothmumbai/Hariom-Sweets.git hariom-sweets
cd hariom-sweets

# Clean up requirements.txt
echo "🧹 Cleaning up Python requirements..."
cd backend
sed -i '/emergentintegrations/d' requirements.txt
cd ..

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
yarn install
echo "🔨 Building frontend..."
GENERATE_SOURCEMAP=false yarn build
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
pip3 install -r requirements.txt
cd ..

# Create backend .env
echo "⚙️  Creating backend .env..."
cat > backend/.env << 'EOF'
MONGO_URL=mongodb://127.0.0.1:27017
DB_NAME=hariom_sweets
CORS_ORIGINS=*
EOF

# Update frontend .env to use server IP (optional - for API calls)
echo "⚙️  Updating frontend .env..."
cat > frontend/.env << 'EOF'
REACT_APP_BACKEND_URL=http://65.20.72.236
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
EOF

# Configure Nginx
echo "⚙️  Configuring Nginx..."
cat > /etc/nginx/sites-available/hariom-sweets << 'EOF'
server {
    listen 80;
    server_name _;
    client_max_body_size 100M;

    # Frontend
    location / {
        root /var/www/hariom-sweets/frontend/build;
        try_files $uri $uri/ /index.html;
        add_header Cache-Control "no-cache, must-revalidate";
    }

    # Backend API
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300;
        proxy_connect_timeout 300;
    }
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/hariom-sweets /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx
nginx -t

# Restart Nginx
systemctl restart nginx
systemctl enable nginx

# Stop any existing PM2 processes
pm2 delete all || true

# Start backend with PM2
echo "🚀 Starting backend..."
cd /var/www/hariom-sweets/backend
pm2 start server.py --name hariom-backend --interpreter python3 --time --log-date-format 'YYYY-MM-DD HH:mm:ss'

# Save PM2 config
pm2 save
pm2 startup systemd -u root --hp /root

# Configure firewall
echo "🔒 Configuring firewall..."
ufw --force enable
ufw allow 22
ufw allow 80
ufw allow 443

echo ""
echo "✅ Deployment completed!"
echo ""
echo "🌐 Your site should be running at: http://65.20.72.236"
echo ""
echo "📊 Useful commands:"
echo "  - Check backend: pm2 status"
echo "  - View logs: pm2 logs hariom-backend"
echo "  - Restart backend: pm2 restart hariom-backend"
echo "  - Restart Nginx: systemctl restart nginx"
echo ""
echo "🔍 If there are issues, check:"
echo "  - Backend logs: pm2 logs hariom-backend --lines 100"
echo "  - Nginx logs: tail -50 /var/log/nginx/error.log"
echo "  - MongoDB: systemctl status mongod"
