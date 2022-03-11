# build environment
FROM node:16-alpine as build
WORKDIR /ui

COPY . ./
RUN npm i
RUN npm run build

# nginx
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
# Copy static assets from builder stage
COPY --from=build /ui/build .

# needed this to make React Router work properly
RUN rm /etc/nginx/conf.d/default.conf
COPY infra/nginx/nginx.conf /etc/nginx/conf.d

# Expose port 80 for HTTP Traffic
EXPOSE 80

# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
