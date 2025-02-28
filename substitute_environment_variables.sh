#!/bin/sh

ROOT_DIR=/usr/share/nginx/html # Update this to match your Nginx root

# Replace env vars in files served by NGINX
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html $ROOT_DIR/css/*.css;
do
  sed -i "s|VUE_APP_API_URL_PLACEHOLDER|${VUE_APP_API_URL}|g" $file
  # Add more placeholders here for other environment variables if needed
done

# Let container execution proceed with Nginx
exec "$@"