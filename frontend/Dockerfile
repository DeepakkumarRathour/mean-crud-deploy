# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci

# Copy full frontend source
COPY . .

# Build Angular app (project name = angular-15-crud)
RUN npm run build -- --configuration production --project angular-15-crud

# Stage 2: Serve using nginx
FROM nginx:stable-alpine

# Copy Angular built files to nginx html folder
COPY --from=builder /app/dist/angular-15-crud/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
