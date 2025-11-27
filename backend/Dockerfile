# Use official Node LTS
FROM node:18-alpine

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --only=production

# Copy source code
COPY . .

# Expose backend port
ENV PORT=3000
EXPOSE 3000

# Start the backend
CMD ["npm", "start"]

