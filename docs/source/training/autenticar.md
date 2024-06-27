---
myst:
  html_meta:
    "description": "Manual do portal - treinamento do Volto para Plone 6 da CMC. Autenticação."
    "property=og:description": "Manual do portal - treinamento do Volto para Plone 6 da CMC. Autenticação."
    "property=og:title": "Frontend"
    "keywords": "Volto, Plone, frontend, React, User manual, Manual de usuário, treinamento, autenticar"
---


(autenticacao-label)=

# Autenticação no portal do volto na cmc

A autenticação no portal Volto.

## Menu de acesso ao formulário de login

O portal exibe no topo, em seu cabeçalho, o ítem de menu `Entrar` para o formulário de login do portal Plone.  

```{image} ./_static/training/autenticar/menu-entrar.png
:alt: Menu entrar no topo da página.
```

## Formulário de login padrão

Ao clicar no ítem de menu `Entrar` o formulário de login padrão do Plone é exibido com os campos usuário e senha em branco em instalações padrão. Para o portal da extranet usaremos o sistema de autenticação única da Câmara de Curitiba.

```{image} ./_static/training/autenticar/form-login.png
:alt: Formulário de login vazio.
```

## Formulário de login da autenticação única da Câmara de Curitiba

Ao clicar no ítem de menu `Entrar` o formulário de login de autenticação única da Câmara de Curitiba será apresentado para a extranet com os campos usuário e senha em branco.

```{image} ./_static/training/autenticar/form-login-keycloak.png
:alt: Formulário de login de autenticação única vazio.
```

## Botão entrar do formulário de login

Após preencher o formulário com o usuário e senha basta clicar no botão com a seta para a direita para enviar os dados do formulário para o portal.

```{image} ./_static/training/autenticar/form-login-entrar.png
:alt: Formulário de login com usuário aluno, senha e botão entrar. 
```

## Botão entrar do formulário de login de autenticação única

Após preencher o formulário de autenticação única da Câmara de Curitiba com o usuário e senha basta clicar no botão enviar e submeter os dados do formulário para o sistema de autenticação única da Câmara de Curitiba.

```{image} ./_static/training/autenticar/form-login-entrar-keycloak.png
:alt: Formulário de login de autenticação única com usuário aluno, senha e botão entrar. 
```

## Autenticação bem sucedida

Após a autenticação bem sucedida o ítem de menu `Entrar` não é mais exibido. É apresentada a barra de ações com as funcionalidades que o usuário tem acesso.

```{image} ./_static/training/autenticar/cabecalho-autenticado.png
:alt: Topo da página com barra de ações e sem o menu Entrar.
```

## Ferramentas de usuário

Outra funcionalidade habilitada ao autenticar são as ferramentas de usuário. Estão habilitadas a configuração do perfil e preferências pessoais e são acessadas pelo botão com uma silhueta no final da barra de ações.

```{image} ./_static/training/autenticar/barra-de-acoes-e-ferramentas-usuario.png
:alt: Barra de ações com botões de ação e ferramentas de usuário.
```

## Encerrar a sessão

Para encerrar a sessão, fazer o logout, clique no botão sair presente no menu de ferramentas pessoais.

```{image} ./_static/training/autenticar/ferramentas-usuario-botao-sair.png
:alt: Botão sair nas ferramentas de usuário.
```
