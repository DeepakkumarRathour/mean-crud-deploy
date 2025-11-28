# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

# Copy Angular project
COPY angular-15-crud/package*.json ./angular-15-crud/
RUN cd angular-15-crud && npm install

COPY angular-15-crud ./angular-15-crud

# Build Angular project
RUN cd angular-15-crud && npm run build -- --configuration production

# Stage 2: Serve with Nginx
FROM nginx:stable-alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy Angular build output
COPY --from=builder /app/angular-15-crud/dist/angular-15-crud/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
