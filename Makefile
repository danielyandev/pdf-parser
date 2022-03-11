deploy-api:
	./api/infra/deploy.sh

deploy-ui:
	./ui/infra/deploy.sh

# ex. make port-forward port=3000
port-forward:
	./ui/infra/port-forward.sh $(port)
