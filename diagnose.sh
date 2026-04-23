#!/bin/bash

# Hariom Sweets - Troubleshooting Script
# Run this on your Hetzner server to diagnose issues

echo "========================================"
echo "🔍 HARIOM SWEETS - DIAGNOSTICS"
echo "========================================"
echo ""

# 1. Check if application directory exists
echo "1️⃣ Checking application directory..."
if [ -d "/var/www/hariom-sweets" ]; then
    echo "✅ Directory exists"
    ls -la /var/www/hariom-sweets/
else
    echo "❌ Directory /var/www/hariom-sweets does NOT exist"
    echo "   Action: Upload and extract the application files first"
fi
echo ""

# 2. Check Nginx status
echo "2️⃣ Checking Nginx status..."
if systemctl is-active --quiet nginx; then
    echo "✅ Nginx is running"
    systemctl status nginx --no-pager | head -5
else
    echo "❌ Nginx is NOT running"
    echo "   Action: Run 'systemctl start nginx'"
fi
echo ""

# 3. Check Nginx configuration
echo "3️⃣ Checking Nginx configuration..."
if [ -f "/etc/nginx/sites-enabled/hariom-sweets" ]; then
    echo "✅ Nginx site configuration exists"
    nginx -t 2>&1
else
    echo "❌ Nginx site configuration NOT found"
    echo "   Action: Run the deployment script"
fi
echo ""

# 4. Check if port 80 is open
echo "4️⃣ Checking if port 80 is listening..."
if netstat -tulpn | grep -q ":80"; then
    echo "✅ Port 80 is listening"
    netstat -tulpn | grep ":80"
else
    echo "❌ Port 80 is NOT listening"
    echo "   Action: Check Nginx configuration and firewall"
fi
echo ""

# 5. Check firewall
echo "5️⃣ Checking firewall status..."
if command -v ufw &> /dev/null; then
    ufw status
elif command -v iptables &> /dev/null; then
    iptables -L -n | grep -E "(80|8001)"
else
    echo "ℹ️  No firewall detected or firewall commands not available"
fi
echo ""

# 6. Check PM2 processes
echo "6️⃣ Checking PM2 processes..."
if command -v pm2 &> /dev/null; then
    pm2 status
    echo ""
    echo "Backend logs (last 20 lines):"
    pm2 logs hariom-backend --lines 20 --nostream 2>&1 || echo "No backend logs available"
else
    echo "❌ PM2 not installed"
    echo "   Action: Run 'npm install -g pm2'"
fi
echo ""

# 7. Check backend port
echo "7️⃣ Checking if backend port 8001 is listening..."
if netstat -tulpn | grep -q ":8001"; then
    echo "✅ Backend port 8001 is listening"
    netstat -tulpn | grep ":8001"
else
    echo "❌ Backend port 8001 is NOT listening"
    echo "   Action: Start the backend with PM2"
fi
echo ""

# 8. Test backend API
echo "8️⃣ Testing backend API..."
curl -s http://localhost:8001/api/ 2>&1 || echo "❌ Backend not responding"
echo ""

# 9. Check MongoDB
echo "9️⃣ Checking MongoDB status..."
if systemctl is-active --quiet mongodb || systemctl is-active --quiet mongod; then
    echo "✅ MongoDB is running"
else
    echo "❌ MongoDB is NOT running"
    echo "   Action: Run 'systemctl start mongodb'"
fi
echo ""

# 10. Check frontend build
echo "🔟 Checking frontend build..."
if [ -d "/var/www/hariom-sweets/frontend/build" ]; then
    echo "✅ Frontend build exists"
    ls -la /var/www/hariom-sweets/frontend/build/ | head -10
else
    echo "❌ Frontend build NOT found"
    echo "   Action: Run 'cd /var/www/hariom-sweets/frontend && yarn build'"
fi
echo ""

# 11. Test Nginx response
echo "1️⃣1️⃣ Testing Nginx response..."
curl -I http://localhost 2>&1 | head -10
echo ""

echo "========================================"
echo "📋 SUMMARY"
echo "========================================"
echo ""
echo "Quick fixes to try:"
echo "1. Start Nginx: systemctl start nginx"
echo "2. Allow port 80: ufw allow 80 (if using UFW)"
echo "3. Start backend: cd /var/www/hariom-sweets/backend && pm2 start server.py --name hariom-backend --interpreter python3"
echo "4. Build frontend: cd /var/www/hariom-sweets/frontend && yarn build"
echo "5. Restart all: systemctl restart nginx && pm2 restart all"
echo ""
echo "View this output and share it if you need help!"
