#!/bin/sh

# Replace environment variables in all .js files in the dist directory
find /usr/share/nginx/html -type f -name "*.js" -print0 | while IFS= read -r -d $'\0' file
do
  envsubst < "$file" > "$file.tmp" && mv "$file.tmp" "$file"
done

# Start Nginx
nginx -g "daemon off;"