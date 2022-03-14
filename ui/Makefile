# Name and port should be the same as in infra/values.yaml
NAME = "pdf-parser-ui"
PORT = 3000

docker-build:
	docker build -t danielyandev/$(NAME):latest .

docker-push:
	docker push danielyandev/$(NAME):latest

start:
	helm install $(NAME) ./infra/helm-chart

stop:
	helm uninstall $(NAME) && lsof -ti tcp:$(PORT) | xargs kill

port-forward:
	kubectl port-forward deployment/$(NAME) $(PORT):$(PORT) &

restart: stop start

update: docker-build docker-push

up: update restart