# Use official Node.js image as build environment
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build the app
RUN npm run build

# Use Nginx to serve the production build
FROM nginx:stable-alpine as production

# Copy built app from builder stage
COPY --from=builder /app/out /usr/share/nginx/html

# Copy custom Nginx config (optional)
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
