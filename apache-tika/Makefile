TIKA_NAME = "pdf-parser-apache-tika"
TIKA_PORT = 9998
NGINX_NAME = "pdf-parser-apache-tika-nginx"
NGINX_PORT = 9999

start:
	kubectl apply -f deployment.yml

stop-tika:
	kubectl delete deploy $(TIKA_NAME) && kubectl delete service $(TIKA_NAME)-service && lsof -ti tcp:$(TIKA_PORT) | xargs kill

port-forward-tika:
	kubectl port-forward deployment/$(TIKA_NAME) $(TIKA_PORT):$(TIKA_PORT) &

port-forward-nginx:
	kubectl port-forward deployment/$(TIKA_NAME) $(NGINX_PORT):$(NGINX_PORT) &

stop-nginx:
	kubectl delete service $(NGINX_NAME)-service && lsof -ti tcp:$(NGINX_PORT) | xargs kill

docker-build:
	docker build -t danielyandev/$(NGINX_NAME):latest .

docker-push:
	docker push danielyandev/$(NGINX_NAME):latest

stop: stop-nginx stop-tika

port-forward: port-forward-tika port-forward-nginx

restart: stop start

update: docker-build docker-push

up: update restart