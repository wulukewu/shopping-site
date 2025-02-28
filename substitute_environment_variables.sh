#!/bin/sh
ROOT_DIR=/usr/share/nginx/html  # Corrected path to match the Nginx root
# Replace env vars in files served by NGINX
for file in $ROOT_DIR/js/*.js* $ROOT_DIR/index.html $ROOT_DIR/css/*.css*;  # Added css directory
do
  sed -i "s|VUE_APP_API_URL_PLACEHOLDER|${VUE_APP_API_URL}|g" "$file"
  # Add your other variables here...
done

# Let container execution proceed
exec "$@"