#!/bin/bash

# Hariom Sweets - Hetzner Deployment Script
# Run this script on your Hetzner server after uploading the application files

set -e

echo "🚀 Starting Hariom Sweets deployment on Hetzner..."

# Update system
echo "📦 Updating system packages..."
apt-get update

# Install Node.js 18
echo "📦 Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Install Python and pip
echo "📦 Installing Python..."
apt-get install -y python3 python3-pip python3-venv

# Install MongoDB
echo "📦 Installing MongoDB..."
apt-get install -y mongodb

# Install Nginx
echo "📦 Installing Nginx..."
apt-get install -y nginx

# Install PM2 globally
echo "📦 Installing PM2..."
npm install -g yarn pm2

# Create application directory
APP_DIR="/var/www/hariom-sweets"
echo "📁 Creating application directory at $APP_DIR..."
mkdir -p $APP_DIR

# Note: You need to upload the application files to $APP_DIR first
# You can use: scp -r /app/* root@138.199.146.191:/var/www/hariom-sweets/

cd $APP_DIR

# Install frontend dependencies
echo "📦 Installing frontend dependencies..."
cd frontend
yarn install
echo "🔨 Building frontend..."
yarn build
cd ..

# Install backend dependencies
echo "📦 Installing backend dependencies..."
cd backend
pip3 install -r requirements.txt
cd ..

# Update MongoDB URL in backend .env
echo "⚙️  Configuring environment variables..."
sed -i 's|mongodb://localhost:27017|mongodb://127.0.0.1:27017|g' backend/.env

# Create Nginx configuration
echo "⚙️  Configuring Nginx..."
cat > /etc/nginx/sites-available/hariom-sweets << 'EOF'
server {
    listen 80;
    server_name _;

    # Frontend
    location / {
        root /var/www/hariom-sweets/frontend/build;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://127.0.0.1:8001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# Enable site
ln -sf /etc/nginx/sites-available/hariom-sweets /etc/nginx/sites-enabled/
rm -f /etc/nginx/sites-enabled/default

# Test Nginx configuration
nginx -t

# Restart Nginx
systemctl restart nginx
systemctl enable nginx

# Start MongoDB
systemctl start mongodb
systemctl enable mongodb

# Start backend with PM2
echo "🚀 Starting backend service..."
cd $APP_DIR/backend
pm2 start server.py --name hariom-backend --interpreter python3 --env production

# Save PM2 configuration
pm2 save
pm2 startup systemd -u root --hp /root

echo "✅ Deployment completed successfully!"
echo ""
echo "🌐 Your application should now be running at:"
echo "   http://138.199.146.191"
echo ""
echo "📊 To check status:"
echo "   pm2 status"
echo "   pm2 logs hariom-backend"
echo ""
echo "🔄 To restart:"
echo "   pm2 restart hariom-backend"
