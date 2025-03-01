#!/bin/sh

# Replace the placeholder in config.js with the actual environment variable
sed -i "s|YOUR_API_URL_HERE|$VUE_APP_API_URL|g" /usr/share/nginx/html/config.js

# Start nginx
nginx -g "daemon off;"