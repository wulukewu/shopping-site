#!/bin/sh

# Create .env.production.local file with the VUE_APP_BASE_URL environment variable
echo "VUE_APP_BASE_URL=$VUE_APP_BASE_URL" > /app/.env.production.local

# Start nginx
nginx -g "daemon off;"