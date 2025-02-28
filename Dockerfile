# Use an official Node.js runtime as the base image
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project source code
COPY . .

# Declare VUE_APP_API_URL as an argument and define a default
# ARG VUE_APP_API_URL='http://localhost:3000' # Default if not provided

# Set the environment variable during the build
# ENV VUE_APP_API_URL=$VUE_APP_API_URL

# Build the Vue.js application
RUN npm run build

# Use a lightweight web server image (e.g., nginx)
FROM nginx:alpine

# Install envsubst (needed for environment variable substitution)
RUN apk add --no-cache gettext

# Copy the built application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Create a startup script to run envsubst before nginx starts
COPY docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

# Expose port 80 (the default port for nginx)
EXPOSE 80

# Use the entrypoint script to start nginx
ENTRYPOINT ["/docker-entrypoint.sh"]