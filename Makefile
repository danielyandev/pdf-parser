start-api:
	cd ./api && make start

start-ui:
	cd ./ui && make start

up-api:
	cd ./api && make up && cd ../

up-ui:
	cd ./ui && make up && cd ../

start: start-api start-ui

up: up-api up-ui

port-forward:
	pkill -f "port-forward" && ./ui/infra/port-forward.sh && ./api/infra/port-forward.sh