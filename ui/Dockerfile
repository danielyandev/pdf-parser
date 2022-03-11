# build environment
FROM node:16-alpine as build
WORKDIR /ui

COPY . ./
RUN npm i
RUN npm run build

# nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /ui/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
