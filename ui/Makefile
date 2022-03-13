NAME = "pdf-parser-ui"
PORT = 3000

docker-build:
	docker build -t danielyandev/$(NAME):latest .

docker-push:
	docker push danielyandev/$(NAME):latest

start:
	kubectl apply -f deployment.yml

stop:
	kubectl delete deploy $(NAME) && kubectl delete service $(NAME)-service && lsof -ti tcp:$(PORT) | xargs kill

port-forward:
	kubectl port-forward deployment/$(NAME) $(PORT):$(PORT) &

restart: stop start

update: docker-build docker-push

up: update restart