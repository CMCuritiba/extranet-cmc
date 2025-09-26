---
myst:
  html_meta:
    "description": "Manual do portal - treinamento do Volto para Plone 6 da CMC. Compartilhamento."
    "property=og:description": "Manual do portal - treinamento do Volto para Plone 6 da CMC. Compartilhamento."
    "property=og:title": "Frontend"
    "keywords": "Volto, Plone, frontend, React, User manual, Manual de usuário, treinamento, compartilhar"
---


(compartilhamento-label)=

# Configurar compartilhamento no portal do volto na cmc

Configurar compartilhamento no portal Volto.


## Inicio

Quando o usuário está autenticado e clica no botão de mais opções, um menu é exibido. No menu são apresentadas várias funcionalidades. Alteração de estado, histórico de mudanças, definições de compartilhamento, gerenciamento de url e verificação de links e referências.


```{image} ./_static/training/compartilhar/menu-mais-opcoes.png
:alt: Menu mais opções da página, estado, histórico, compartilhamento, gerenciamento de url, links e referências.
```

## Estados

O usuário que tem permissão de editor ou revisor pode alterar o estado do ítem de conteúdo. Os estados padrão do Plone são o estado Privado, o estado em Revisão e o estado Publicado. Clique no menu de estados.

```{image} ./_static/training/compartilhar/link-dropdown-estados.png
:alt: Botão para os estados da página. Estado privado selecionado.
```

### Opções de estados

Ao clicar no menu de opções de estado os valores possíveis são apresentados. 

```{image} ./_static/training/compartilhar/link-dropdown-estados-expandido.png
:alt: Opçoes de estados da página. Privado, enviar para revisão e publicar.
```

## Histórico

É possível ver as mudanças no ítem de conteúdo atraveś da funcionalidade histórico. Clique no menu Histórico para acessar o histórico de mudanças da página.

```{image} ./_static/training/compartilhar/link-historico-mudancas-da-pagina.png
:alt: Botão para o formulário do histórico de mudanças da página.
```

### Mudanças da página

Na página de histórico de mudanças é possível ver o que foi feito, quem fez e quando.

```{image} ./_static/training/compartilhar/historico-de-mudancas-da-pagina.png
:alt: Histórico de mudanças da página.
:width: 80%
```

## Compartilhamento

É possível configurar o acesso ao ítem de conteúdo através do menu de compartilhamento. Clique no menu Compartilhamento para abrir a página de definição de compartilhamento.

```{image} ./_static/training/compartilhar/link-compartilhamento-da-pagina.png
:alt: Botão para o compartilhamento da página.
```

### Configuração de compartilhamento

Por padrão aparece o grupo préexistente do Plone chamado `Usuários logados`. É possível configurar as permissões para que usuários logados possam editar, ver ou revisar o ítem de conteúdo.

```{image} ./_static/training/compartilhar/compartilhamento-inicio.png
:alt: Fomulário padrão de configuração de compartilhamento da página.
:width: 80%
```

### Pesquisa de usuário

Para configurar as permissões de compartilhamento para outros usuários basta pesquisar pelo nome.

```{image} ./_static/training/compartilhar/compartilhamento-pesquisar-usuario.png
:alt: Pesquisar por usuário.
:width: 80%
```

### Usuários encontrados

Assim que a pesquisa é realizada os usuários correspondentes a pesquisa são exibidos na lista. Então é possível configurar as permissões de compartilhamento para os usuários encontrados.

```{image} ./_static/training/compartilhar/compartilhamento-pesquisa-de-usuario-resultado.png
:alt: Resultado da busca pelo termo usuário. 
:width: 80%
```

### Pesquisa por grupo

Da mesma forma é possível buscar grupos para definir as permissões.

```{image} ./_static/training/compartilhar/compartilhamento-pesquisar-grupo.png
:alt: Pesquisar por grupo.
:width: 80%
```

### Grupos encontrados

Assim como os usuários, os grupos correspondentes ao termo de pesquisa são exibidos na lista. Então as configurações de compartilhamento para os grupos podem ser realizadas.

```{image} ./_static/training/compartilhar/compartilhamento-pesquisa-de-grupo-resultado.png
:alt: Resultado da busca pelo grupo treinamento.
:width: 80%
```

### Configuração de permissões, botão salvar

Após as escolhas de permissões deve ser feito clique no botão salvar para persistir as mudanças.

```{image} ./_static/training/compartilhar/compartilhamento-altera-permissao-usuarios-botao-salvar.png
:alt: Permissões de usuários, aluno3 pode ver e revisar, aluno4 pode editar e ver. Botão salvar em destaque.
:width: 80%
```

### Configuração de permissões, botão cancelar

Se houver a necessidade é possível cancelar todas as alterações que ainda não foram salvas.

```{image} ./_static/training/compartilhar/compartilhamento-altera-permissao-usuarios-botao-cancelar.png
:alt: Permissões de usuários, aluno3 pode ver e revisar, aluno4 pode editar e ver. Botão cancelar em destaque.
:width: 80%
```

### Botões de ação habilitados, usuário aluno, autor

De acordo com as permissões, são exibidos os botões de ação. O usuário aluno é um usuário com direitos de editor, revisor e membro. Como ele é o autor do ítem atual possui todas as permissões e todos os botões estão habilitados.

```{image} ./_static/training/compartilhar/compartilhamento-acoes-usuario-aluno-da-pagina.png
:alt: Usuário aluno é o autor, pode adicionar, editar, ver e revisar, botões habilitados.
:height: 400
```

### Botões de ação habilitados, usuário aluno 2, possui permissões

De forma semelhante ocorre com o aluno 2, ele tem todos os papéis que o aluno e então os botões também estão habilitados.

```{image} ./_static/training/compartilhar/compartilhamento-acoes-usuario-aluno2-da-pagina.png
:alt: Usuário aluno 2 pode adicionar, editar, ver e revisar, botões habilitados.
:height: 400
```

### Botão mais opções apenas, usuário 3

No caso do aluno 3 ele não tem as permissões nem os papéis. Apenas o botão de mais opções aparece.

```{image} ./_static/training/compartilhar/compartilhamento-botao-mais-opcoes-usuario-aluno3-da-pagina.png
:alt: Botão de mais opções do usuário 3.
:height: 400
```

### Menu de mais opções desabilitado, usuário 3, não possui permissões

Ao clicar no botão mais opções nenhuma funcionalidade aparece. O aluno 3 só pode ver o ítem atual sem modificar nada.

```{image} ./_static/training/compartilhar/compartilhamento-mais-opcoes-vazio-usuario-aluno3-da-pagina.png
:alt: Lista de mais opções do usuário 3, sem permissões está vazia.
:height: 400
```

### Botão de ferramentas pessoais do usuário 3

Da mesma forma que os usuários que possuem mais permissões o aluno 3 tem acesso a ferramentas pessoais. Clique no botão de ferramentas pessoais do usuário.

```{image} ./_static/training/compartilhar/compartilhamento-botao-ferramentas-pessoais-usuario-aluno3-da-pagina.png
:alt: Botão de ferramentas pessoais do usuário 3.
:height: 400
```

### Ferramentas pessoais do usuário 3

Ao clicar no botão de ferramentas pessoais do usuário 3 percebemos que ele possue as mesmas funcionalidades que os outros usuários. Apenas o usuário administrador do portal possui uma funcionalidade diferente para gerenciar o portal. Entretanto a parte administrativa está fora do escopo desse treinamento.

```{image} ./_static/training/compartilhar/compartilhamento-ferramentas-pessoais-usuario-aluno3-da-pagina.png
:alt: Ferramentas pessoais do usuário 3.
:height: 400
```

## Gerenciamento de url

Outra funcionalidade do Plone é o gerenciamento de endereços (urls). É possível definir nomes alternativos para acessar esse mesmo ítem. Clica no menu de `GERENCIAMENTO DE URL` para acessar o formulário de configuração.

```{image} ./_static/training/compartilhar/link-gerenciamento-de-urls-da-pagina.png
:alt: Botão para o formulário de gerenciamento de referências alternativas da página.
```

### Caminhos alternativos

No formulário de gerenciamento de endereços basta adicionar ou remover o caminho alternativo desejado.

```{image} ./_static/training/compartilhar/gerenciamento-urls-alternativas-da-pagina.png
:alt: Formulário de gerenciamento de referências alternativas a esta página.
:width: 80%
```

## Links e referências

Outra funcionalidade é o formulário de links e referências. Esta funcionalidade permite saber quais são as ligações que apontam para este ítem de conteúdo. Clique na notícia no menu de navegação superior para ver a notícia.

```{image} ./_static/training/compartilhar/link-para-noticia.png
:alt: Referência na barra de navegação para notícia que tem um link para a página.
:width: 80%
```

### Notícia com referência para a página

Foi criada uma notícia que tem um link para o nosso ítem de conteúdo chamado `Página de compartilhamento`.

```{image} ./_static/training/compartilhar/link-para-pagina-na-noticia.png
:alt: Referência para a página no corpo da notícia.
:width: 80%
```

### Referências da página

Para acessar a funcionalidade de referências, clique no menu de Links e Referências do ítem `Página de compartilhamento`.

```{image} ./_static/training/compartilhar/link-referencias-da-pagina.png
:alt: Botão para o formulário das referências da página.
```

### Lista de ítens com referência para a página

Então a lista de ítens que fazem ligação para a página aparecem na lista. Repare que a notícia está na lista de referências.

```{image} ./_static/training/compartilhar/links-ou-referencias-associados-a-pagina.png
:alt: Formulário com os links e referências do site.
:width: 80%
```