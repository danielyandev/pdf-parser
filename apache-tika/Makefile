# Name and port should be the same as in infra/values.yaml
NAME = "pdf-parser-apache-tika"
PORT = 9998

start:
	helm install $(NAME) ./infra

stop:
	helm uninstall $(NAME) && lsof -ti tcp:$(PORT) | xargs kill

port-forward:
	kubectl port-forward deployment/$(NAME) $(PORT):$(PORT) &

restart: stop start
