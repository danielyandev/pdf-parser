# build environment
FROM node:16-alpine as build
WORKDIR /ui

COPY . ./
RUN npm i
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /ui/build /usr/share/nginx/html

# nginx
COPY infra/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
