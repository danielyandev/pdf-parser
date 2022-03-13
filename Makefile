start-api:
	cd ./api && make start

start-ui:
	cd ./ui && make start

start-tika:
	cd ./apache-tika && make start

stop-api:
	cd ./api && make stop

stop-ui:
	cd ./ui && make stop

stop-tika:
	cd ./apache-tika && make stop

up-api:
	cd ./api && make up && cd ../

up-ui:
	cd ./ui && make up && cd ../

port-forward-api:
	cd ./api && make port-forward

port-forward-ui:
	cd ./ui && make port-forward

port-forward-tika:
	cd ./apache-tika && make port-forward

port-forward: port-forward-api port-forward-ui port-forward-tika

start: start-tika start-api start-ui

stop: stop-tika stop-api stop-ui

restart: stop start

up: up-api up-ui