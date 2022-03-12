NAME = "pdf-parser-apache-tika"
PORT = 9998

start:
	kubectl apply -f deployment.yml

stop:
	kubectl delete deploy $(NAME) && kubectl delete service $(NAME)-service && lsof -ti tcp:$(PORT) | xargs kill

port-forward:
	kubectl port-forward deployment/$(NAME) $(PORT):$(PORT) &
