FROM_DC := cd docker &&
DC := docker-compose -p ebics-api-client-node
EXEC := $(DC) exec
DOCKER_COMPOSE_FILE := -f docker-compose.yml
BUILD := $(DC) $(DOCKER_COMPOSE_FILE) build
UP := $(DC) $(DOCKER_COMPOSE_FILE) up
DOWN := $(DC) down
NODEC := node-ebics-api-client-node
IN_SCRIPTS := --workdir /var/www/ebics-api-client-node/scripts

.PHONY: Makefile start stop build

build:
	$(FROM_DC) $(BUILD) --no-cache

start:
	$(FROM_DC) $(UP)

stop:
	$(FROM_DC) $(DOWN)

bash:
	$(FROM_DC) $(EXEC) $(IN_SCRIPTS) $(NODEC) bash