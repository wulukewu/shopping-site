# Use a Node.js base image for building the Vue application
FROM node:18-alpine AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package*.json ./

# Install dependencies.  Use --frozen-lockfile for production builds
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue application for production
RUN npm run build

# --- Stage 2: Serve the built application with Nginx ---
FROM nginx:alpine

# Copy the built application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Optionally, customize the Nginx configuration (if needed)
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx is configured to serve the static files by default, so no CMD is needed.