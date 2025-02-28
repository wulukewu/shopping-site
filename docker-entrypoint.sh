#!/bin/sh

# Replace environment variables in the nginx configuration file
envsubst < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/temp.conf && mv /etc/nginx/conf.d/temp.conf /etc/nginx/conf.d/default.conf

# Start nginx
nginx -g "daemon off;"