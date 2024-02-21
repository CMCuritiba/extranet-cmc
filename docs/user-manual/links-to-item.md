---
myst:
  html_meta:
    "description": "Manual do usuário como encontrar todos os links e relações para o item atual."
    "property=og:description":"Manual do usuário como encontrar todos os links e relações para o item atual."
    "property=og:title": "Encontrando links e relações para o item atual."
    "keywords": "Volto, Plone, frontend, React, User manual, links, relations, references, related content, manual do usuário, relações, referências, conteúdo relacionado"
---

(links-to-item-label)=

# Encontrando links e referências para a página atual

```{versionadded} Volto 16.28.0
Esta funcionalidade foi adicionada no Volto 16.28.0, mas estava desabilitada por padrão.
```

```{versionchanged} Volto 17.0.0-alpha.19
Esta funcionalidade está habilitada por padrão agora.
```

As vezes é difícil acompanhar de onde uma página é referenciada.
Isto é especialmente verdade quando você quer reconstruir seu website com um grande número de objetos sendo movidos ou removidos.
Para esta situação, você pode visitar a página {guilabel}`Links e referências`, que é uma visão geral de todos os itens que referenciam um certo item de conteúdo.

```{note}
Um item referencia outro criando um link para este itemem um bloco, referenciando ele no campo {guilabel}`Itens relacionados`, ou referenciando ele em um campo de relacionamento.
```

## Visão {guilabel}`Links e referências` view

Na barra de tarefas ao lado esquerdo, você pode clicar no item com três pontos horizontais alinhados, chamado de {guilabel}`Menu mais`.
Clique no item rotulado {guilabel}`Links e referências`.

````{note}
Se você não estiver vendo {guilabel}`Links e referências`, então você está com uma versão do Volto que não tem essa funcionalidade, ou esta funcionalidade não está habilitada no seu site.
Em ambos os casos, contate o administrado para ajuda.

```{seealso}
{term}`excludeLinksAndReferencesMenuItem`
```
````

Você pode ver então uma tabela mostrando todos os links e referências do item atual.

```{image} ../_static/user-manual/manage/link-to-items.png
:alt: Um painel legendado com "Conteúdo que linka ou referencia 'Supervisor Adélaïde Pickavance'". Abaixo da legenda, há uma tabela com uma única seção por tipo de relacionamento, onde cada seção tem três colunas. O cabeçalho da primeira coluna é o nome da relação, o segundo é "Estado da Revisão", e o terceiro é "Tipo". As seções são nomeadas, de cima para baixo, "Linkando este link com hyperlink no texto", "Referenciando o ítem como item relacionado", e "Referenciando este item com '[Nome da Relação]'".
```

Para editores, esta visão dá uma ideia se estes links e referências ainda são relevantes.
À segunda vista, ele também ajuda a prevenir quebras potenciais de links e relações.

Por exemplo, quando você tenta apagar esta página com outras páginas linkando a ela, você recebe um aviso que isto irá causar a quebrra de links ou relações que conduzem a página de erro "não encontrado".
Se você ver esse aviso, pode inspecionar esta visão e navegar por cada página referenciando, removendo qualquer referência.
