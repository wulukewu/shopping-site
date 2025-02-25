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

# Build the Vue.js application
RUN npm run build

# Use a lightweight web server image (e.g., nginx)
FROM nginx:alpine

# Copy the built application from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose port 80 (the default port for nginx)
EXPOSE 80

# If you need to configure nginx beyond the basics
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Nginx starts automatically on container start,
# so no CMD instruction is needed.