# Stage 1: Build Angular app
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build --prod

# Stage 2: Serve build with nginx
FROM nginx:stable-alpine

COPY --from=builder /app/dist/mean-frontend/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
