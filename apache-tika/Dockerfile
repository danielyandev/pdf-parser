FROM nginx:alpine
WORKDIR /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf
COPY infra/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 9999

ENTRYPOINT ["nginx", "-g", "daemon off;"]
