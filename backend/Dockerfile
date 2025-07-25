# Use an official Node.js image as base
FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Expose port
EXPOSE 3001

# Run the backend server
CMD ["node", "app.js"]
