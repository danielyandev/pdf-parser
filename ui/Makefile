NAME = "pdf-parser-ui"

build:
	docker build -t danielyandev/$(NAME):latest .

push:
	docker push danielyandev/$(NAME):latest

restart:
	kubectl rollout restart deployment $(NAME)

up: build push restart

start:
	./infra/deploy.sh