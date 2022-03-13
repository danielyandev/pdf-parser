NAME = "pdf-parser-api"
PORT = 8080

build:
	docker build -t danielyandev/$(NAME) .

tag:
	docker tag danielyandev/$(NAME) danielyandev/$(NAME):latest

push:
	docker push danielyandev/$(NAME):latest

start:
	kubectl apply -f deployment.yml

stop:
	kubectl delete deploy $(NAME) && kubectl delete service $(NAME)-service && lsof -ti tcp:$(PORT) | xargs kill

port-forward:
	kubectl port-forward deployment/$(NAME) $(PORT):$(PORT) &

restart: stop start

up: build tag push restart