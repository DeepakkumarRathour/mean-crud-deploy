# Stage 1 – Build Angular app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --prod

# Stage 2 – Nginx server
FROM nginx:alpine

COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# IMPORTANT: outputPath from angular.json → dist/angular-15-crud
COPY --from=build /app/dist/angular-15-crud/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
