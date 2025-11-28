# Stage 1: build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --configuration production

# Stage 2: serve with nginx
FROM nginx:stable-alpine

# remove default nginx content
RUN rm -rf /usr/share/nginx/html/*

# copy built frontend
COPY --from=builder /app/dist/mean-frontend/ /usr/share/nginx/html/

# copy custom nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
