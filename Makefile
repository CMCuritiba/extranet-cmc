### Defensive settings for make:
#     https://tech.davis-hansson.com/p/make/
SHELL:=bash
.ONESHELL:
.SHELLFLAGS:=-xeu -o pipefail -O inherit_errexit -c
.SILENT:
.DELETE_ON_ERROR:
MAKEFLAGS+=--warn-undefined-variables
MAKEFLAGS+=--no-builtin-rules

CURRENT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

PROJECT_NAME=extranet-cmc
STACK_NAME=extranet-curitiba-pr-leg-br

# We like colors
# From: https://coderwall.com/p/izxssa/colored-makefile-for-golang-projects
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`
YELLOW=`tput setaf 3`

# Keycloak tests.
COMPOSE_FOLDER=./tests

# Sphinx variables
# You can set these variables from the command line.
SPHINXOPTS      ?=
# Internal variables.
SPHINXBUILD     = "$(realpath bin/sphinx-build)"
SPHINXAUTOBUILD = "$(realpath bin/sphinx-autobuild)"
DOCS_DIR        = ./docs/source/
BUILDDIR        = ../_build/
ALLSPHINXOPTS   = -d $(BUILDDIR)/doctrees $(SPHINXOPTS) .
VALEFILES       := $(shell find $(DOCS_DIR) -type f -name "*.md" -print)

.PHONY: all
all: build

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
.PHONY: help
help: ## This help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

.PHONY: install-frontend
install-frontend:  ## Install React Frontend
	$(MAKE) -C "./frontend/" install

.PHONY: build-frontend
build-frontend:  ## Build React Frontend
	$(MAKE) -C "./frontend/" build

.PHONY: start-frontend
start-frontend:  ## Start React Frontend
	$(MAKE) -C "./frontend/" start

.PHONY: install-backend
install-backend:  ## Create virtualenv and install Plone
	$(MAKE) -C "./backend/" build-dev
	$(MAKE) create-site

.PHONY: build-backend
build-backend:  ## Build Backend
	$(MAKE) -C "./backend/" build-dev

.PHONY: create-site
create-site: ## Create a Plone site with default content
	$(MAKE) -C "./backend/" create-site

.PHONY: start-backend
start-backend: ## Start Plone Backend
	$(MAKE) -C "./backend/" start

.PHONY: install
install:  ## Install
	@echo "Install Backend & Frontend"
	$(MAKE) install-backend
	$(MAKE) install-frontend

# Keycloak
.PHONY: keycloak-start
keycloak-start: ## Start Keycloak stack
	@echo "$(GREEN)==> Start keycloak stack$(RESET)"
	@docker compose -f $(COMPOSE_FOLDER)/docker-compose.yml up -d

.PHONY: keycloak-status
keycloak-status: ## Check Keycloak stack status
	@echo "$(GREEN)==> Check Keycloak stack status$(RESET)"
	@docker compose -f $(COMPOSE_FOLDER)/docker-compose.yml ps

.PHONY: keycloak-stop
keycloak-stop: ## Stop Keycloak stack
	@echo "$(GREEN)==> Stop Keycloak stack$(RESET)"
	@docker compose -f $(COMPOSE_FOLDER)/docker-compose.yml down

##### Documentation

# Add the following 'help' target to your Makefile
# And add help text after each target name starting with '\#\#'
.PHONY: docs-help
docs-help:  ## Docs help message.
	$(MAKE) -C "./docs/" help
	
.PHONY: docs-clean
docs-clean:  ## Clean current and legacy docs build directories, and docs Python virtual environment
	$(MAKE) -C "./docs/" clean

.PHONY: docs-clean-venv
docs-clean-venv:  ## remove docs virtual environment
	$(MAKE) -C "./docs/" clean-venv

.PHONY: docs-clean-build
docs-clean-build:  ## Clean current and legacy docs build directories, and Python virtual environment
	$(MAKE) -C "./docs/" clean-build

.PHONY: docs-config
docs-config: ## Create docs instance configuration
	$(MAKE) -C "./docs/" config

.PHONY: docs-setup
docs-setup:  ## Install sphinx requirements.
	$(MAKE) -C "./docs/" setup

.PHONY: docs-slides
docs-slides: ## Build doc slides
	$(MAKE) -C "./docs/" slides

.PHONY: docs-html
docs-html:  ## Build html
	$(MAKE) -C "./docs/" html

.PHONY: docs-livehtml
docs-livehtml:  ## Rebuild Sphinx documentation on changes, with live-reload in the browser
	$(MAKE) -C "./docs/" livehtml

.PHONY: docs-linkcheck
docs-linkcheck:  ## Run linkcheck
	$(MAKE) -C "./docs/" linkcheck

.PHONY: docs-linkcheckbroken
docs-linkcheckbroken:  ## Run linkcheck and show only broken links
	$(MAKE) -C "./docs/" linkcheckbroken

.PHONY: docs-vale
docs-vale:  ## Install (once) and run Vale style, grammar, and spell checks
	$(MAKE) -C "./docs/" vale

.PHONY: docs-test
docs-test: docs-clean docs-linkcheckbroken docs-vale  ## Clean docs build, then run linkcheckbroken, vale

# TODO production build

.PHONY: build
build:  ## Build in development mode
	@echo "Build"
	$(MAKE) build-backend
	$(MAKE) install-frontend


.PHONY: start
start:  ## Start
	@echo "Starting application"
	$(MAKE) start-backend
	$(MAKE) start-frontend

.PHONY: clean
clean:  ## Clean installation
	@echo "Clean installation"
	$(MAKE) -C "./backend/" clean
	$(MAKE) -C "./frontend/" clean

.PHONY: format
format:  ## Format codebase
	@echo "Format codebase"
	$(MAKE) -C "./backend/" format
	$(MAKE) -C "./frontend/" format

.PHONY: i18n
i18n:  ## Update locales
	@echo "Update locales"
	$(MAKE) -C "./backend/" i18n
	$(MAKE) -C "./frontend/" i18n

.PHONY: test-backend
test-backend:  ## Test backend codebase
	@echo "Test backend"
	$(MAKE) -C "./backend/" test

.PHONY: test-frontend
test-frontend:  ## Test frontend codebase
	@echo "Test frontend"
	$(MAKE) -C "./frontend/" test

.PHONY: test
test:  test-backend test-frontend ## Test codebase

.PHONY: build-images
build-images:  ## Build docker images
	@echo "Build"
	$(MAKE) -C "./backend/" build-image
	$(MAKE) -C "./frontend/" build-image

## Docker stack
.PHONY: stack-start
stack-start:  ## Local Stack: Start Services
	@echo "Start local Docker stack"
	@docker compose -f docker-compose.yml up -d --build
	@echo "Now visit: http://extranet-cmc.localhost"

.PHONY: start-stack
stack-create-site:  ## Local Stack: Create a new site
	@echo "Create a new site in the local Docker stack"
	@docker compose -f docker-compose.yml exec backend ./docker-entrypoint.sh create-site

.PHONY: start-ps
stack-status:  ## Local Stack: Check Status
	@echo "Check the status of the local Docker stack"
	@docker compose -f docker-compose.yml ps

.PHONY: stack-stop
stack-stop:  ##  Local Stack: Stop Services
	@echo "Stop local Docker stack"
	@docker compose -f docker-compose.yml stop

.PHONY: stack-rm
stack-rm:  ## Local Stack: Remove Services and Volumes
	@echo "Remove local Docker stack"
	@docker compose -f docker-compose.yml down
	@echo "Remove local volume data"
	@docker volume rm $(PROJECT_NAME)_vol-site-data

## Acceptance
.PHONY: build-acceptance-servers
build-acceptance-servers: ## Build Acceptance Servers
	@echo "Build acceptance backend"
	@docker build backend -t cmcuritiba/extranet-cmc-backend:acceptance -f backend/Dockerfile.acceptance
	@echo "Build acceptance frontend"
	@docker build frontend -t cmcuritiba/extranet-cmc-frontend:acceptance -f frontend/Dockerfile

.PHONY: start-acceptance-servers
start-acceptance-servers: build-acceptance-servers ## Start Acceptance Servers
	@echo "Start acceptance backend"
	@docker run --rm -p 55001:55001 --name extranet-cmc-backend-acceptance -d cmcuritiba/extranet-cmc-backend:acceptance
	@echo "Start acceptance frontend"
	@docker run --rm -p 3000:3000 --name extranet-cmc-frontend-acceptance --link extranet-cmc-backend-acceptance:backend -e RAZZLE_API_PATH=http://localhost:55001/plone -e RAZZLE_INTERNAL_API_PATH=http://backend:55001/plone -d cmcuritiba/extranet-cmc-frontend:acceptance

.PHONY: stop-acceptance-servers
stop-acceptance-servers: ## Stop Acceptance Servers
	@echo "Stop acceptance containers"
	@docker stop extranet-cmc-frontend-acceptance
	@docker stop extranet-cmc-backend-acceptance

.PHONY: run-acceptance-tests
run-acceptance-tests: ## Run Acceptance tests
	$(MAKE) start-acceptance-servers
	npx wait-on --httpTimeout 20000 http-get://localhost:55001/plone http://localhost:3000
	$(MAKE) -C "./frontend/" test-acceptance-headless
	$(MAKE) stop-acceptance-servers
