# Extranet CMCuritiba

[![Built with Cookiecutter Plone Starter](https://img.shields.io/badge/built%20with-Cookiecutter%20Plone%20Starter-0083be.svg?logo=cookiecutter)](https://github.com/collective/cookiecutter-plone-starter/)
[![Black code style](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/ambv/black)
[![Backend Tests](https://github.com/CMCuritiba/extranet.cmcuritiba.pr.leg.br/actions/workflows/backend.yml/badge.svg)](https://github.com/CMCuritiba/extranet.cmcuritiba.pr.leg.br/actions/workflows/backend.yml)
[![Frontend Tests](https://github.com/CMCuritiba/extranet.cmcuritiba.pr.leg.br/actions/workflows/frontend.yml/badge.svg)](https://github.com/CMCuritiba/extranet.cmcuritiba.pr.leg.br/actions/workflows/frontend.yml)

Extranet da Câmara Municipal de Curitiba
Baseado em Plone 6 - Volto.

## Quick start

### Development Setup

- Python 3.9, 3.10, 3.11
- Node 16
- yarn
- Docker

### Install

```shell
git clone git@github.com:CMCuritiba/extranet.cmcuritiba.pr.leg.br.git
cd extranet.cmcuritiba.pr.leg.br
make install
```

### Start

Start the Backend (http://localhost:8080/)

```shell
make start-backend
```

Start the Frontend (http://localhost:3000/)

```shell
make start-frontend
```

## Structure

This monorepo is composed by two distinct codebases: api and frontend.

- **backend**: API (Backend) Plone installation using pip (not buildout). Includes a policy package named extranetcmcuritibaprlegbr
- **frontend**: React (Volto) package named frontend

### Reasoning

- Repo contains all codebase needed to run the site (excluding existing addons for Plone and React).
- Github Workflows are triggered based on changes on each codebase (see .github/workflows)
- Easier to create Docker images for each codebase
- Showcase Plone installation/setup without buildout

## Linters and Formatting

There are some hooks to run lint checks on the code. If you want to automatically format them, you can run

`make format`

in the root folder or especifically in each backend or frontend folders.

Linters commands are available in each backend and frontend folder.

## Acceptance tests

There are `Makefile` commands in place:

`build-test-acceptance-server`: Build Acceptance Backend Server Docker image that it's being used afterwards. Must be run before running the tests, if the backend code has changed.

`start-test-acceptance-server`: Start server fixture in docker (previous build required)

`start-test-acceptance-frontend`: Start the Core Acceptance Frontend Fixture in dev mode

`test-acceptance`: Start Core Cypress Acceptance Tests in dev mode

### Plugins Installation

## pas.plugins.oidc plugin:

In the setup.py file, located in the "backend/src/site_name/" folder, in the install_requires item, insert the term, with double quotes and a comma: "pas.plugins.oidc",

It is suggested to fill in the first position.

## Configuration of pas.plugins.oidc on the Plone server:

In a terminal, shut down the backend and frontend and run the following scripts, in this order:

```shell
    make clean
    make-backend
    make-frontend
```
After finishing, and a terminal instantiate the backend with:

```shell
  make start-backend
```

In another terminal:

```shell
  make start-frontend
```

Access the link (http://localhost:8080/Plone/prefs_install_products_form), log in with an administrator login and install pas.plugins.oidc.

After the installation above, in the link (http://localhost:8080/Plone/acl_users/plugins/manage_interfaces) the term pas.plugins.oidc.plugins.IOIDCPlugin will appear. Mark and click on ADD, at the bottom of the page.

After confirmation, the link (http://localhost:8080/Plone/acl_users/oidc/login?came_from=http%3A//localhost%3A8080/Plone/acl_users/oidc/manage_propertiesForm) will be available. This is the SSO configuration registration screen.

## pas.plugins.authomatic plugin:
In the setup.py file, located in the "backend/src/site_name/" folder, in the install_requires item, insert the term, with double quotes and a comma: "pas.plugins.authomatic",

It is suggested to fill in the first position.

## Configuration of pas.plugins.oidc on the Plone server:

In a terminal, shut down the backend and frontend and run the following scripts, in this order:

```shell
    make clean
    make-backend
    make-frontend
```
After finishing, and a terminal instantiate the backend with:

```shell
  make start-backend
```

In another terminal:

```shell
  make start-frontend
```

Access the link (http://localhost:8080/Plone/prefs_install_products_form), log in with an administrator login and install pas.plugins.oidc.

Access the link (http://localhost:8080/Plone/@@authomatic-controlpanel), and in "Configuration in JSON" box, insert this string:

```shell
  /* In test. */
```

### Docker compose

## Running the server frontend + backend + nginx + postgres

Create the images:

```shell
  make build-images
```

Run the images with docker compose:

```shell
  cd devops
  docker compose up
```

## Credits

**This was generated by [cookiecutter-plone-starter](https://github.com/collective/cookiecutter-plone-starter) on 2023-05-05 12:54:55**
