---
myst:
  html_meta:
    "description": "Manual do usuário para edição de blocos na Extranet da DTIC da CMC traduzido do manual do Volto, o frontend do Plone 6."
    "property=og:description": "Manual do usuário para edição de blocos na Extranet da DTIC da CMC traduzido do manual do Volto, o frontend do Plone 6."
    "property=og:title": "Como editar conteúdo usando blocos do Volto"
    "keywords": "Volto, Plone, frontend, React, User manual, edit blocks, edição de blocos"
---

(edit-content-using-blocks-label)=

# Editando conteúdo usando blocos

Volto utiliza a interface [Pastanaga UI](https://github.com/plone/pastanaga), oferendo uma composição de página visual utilizando blocos para você.
O editor de blocos oferece para você a adição, modificação, reordenação e remoção de blocos de acordo com seus requisitos.
Os blocos fornecem a você a habilidade de exibir conteúdo de uma maneira específica, embora eles também definam comportamentos e possuem características específicas.


(manage-blocks-label)=

## Gerenciamento de blocos

No Volto, "blocos" são peças individuais de conteúdo que podem ser adicionadas a uma página ou outras áreas de conteúdo.
Estes blocos podem ser usados em diferentes tipos de conteúdos; como texto, imagens, multimídia e podem ser organizados e customizados para criar uma grande variedade de layouts.

Blocos são a característica chave do Volto e são projetados para tornar fácil para os usuários a adição de conteúdo em seu website.
Eles são craidos utilizando componentes React, que são peças modulares de código que podem ser fácilmente ser reutilizados e customizados.


(create-a-block-label)=

### Criar bloco

Para criar ou adicionar um bloco vazio depois de um bloco existente, clique no bloco, então pressione e tecla {kbd}`Enter`.
Um novo bloco vazio aparece.

```{image} ../_static/user-manual/blocks/add-new-block.gif
:alt: Adiciona novo bloco
```

(configure-a-block-label)=

### Configurar bloco

Quando você seleciona um bloco, o editor do bloco aparece na margem direita da página.
Praticamente todos os blocos possuem opções de configuração.


(rearrange-blocks-label)=

### Reorganização de blocos

Para reorganizar blocos, ao lado direito do bloco que deseja mover, clique no controle de movimento, mova o bloco para onde desejar e libere o controle de movimento.


(delete-a-block-label)=

### Remoção de bloco

Para remover um bloco, ao lado direito do bloco, clique no botão de remoção, um ícone de lixeira.


(default-block-types-label)=

## Tipos de bloco padão

Volto oferece diversos tipos de blocos padrão no seu empacotamento.
Você pode acessar e escolher um tipo de bloco para adicionar ao seu conteúdo qunado você tem um bloco vazio.

Agora com seu bloco vazio disponível, você pode selecionar seu tipo de uma das duas formas.

1.  Clique no botão `+` do lado esquerdo do bloco vazio.

    ```{image} ../_static/user-manual/blocks/block-left-add-icon.png
    :alt: Botão de adição de bloco
    ```

2. Pressione `/` dentro de um bloco vazio para abrir o menu de tipos de bloco.
   Você pode digitar algumas letrar para filtrar os tipos de bloco disponíveis.
   Você pode usar as teclas de seta para cima e para baixo para navegar dentro da lista de tipos de bloco.
   Para selecionar o tipo de bloco, você pode clicar ou tocar ou usar a tecla {kbd}`Enter`.

    ```{image} ../_static/user-manual/blocks/block-types-menu.png
    :alt: Menu de tipos de bloco
    ```


(user-manual-description-block-label)=

### Bloco descrição

Um bloco de descrição aceita texto puro.
Quando exibido, ele aparece como descrição na página, e para otimização de mecanismos de pesquisa nas meta tags HTML como `<meta name="description" content="DESCRIPTION_TEXT" data-react-helmet="true">` e `<meta property="og:description" content="DESCRIPTION_TEXT" data-react-helmet="true">`.


(user-manual-grid-block-label)=

### Bloco grid

Um bloco grid cria uma linha única de colunas numa grade, que pode ser usada para exibir conteúdo de uma forma estruturada e organizada.
Você pode selecionar o número de colunas para inserir.

```{image} ../_static/user-manual/blocks/grid-block-number-of-columns.png
:alt: Escolha o número de colunas para inserir num bloco grid.
```

Depois de escolher o número de colunas para inserir num bloco grid, você pode gerenciar as colunas.

```{image} ../_static/user-manual/blocks/grid-block-manage-blocks.png
:alt: Adiciona um tipo de bloco específico em uma coluna de um bloco grid
```

-   Especifique o tipo do bloco numa coluna clicando em seu botão `+`.
-   Reorganize a ordem das colunas no bloco grid arrastando e soltando elas.
-   Adiicone uma coluna ao bloco grid clicando no botão `+` no lado superior esquerdo dele.
-   Remova uma coluna do bloco grid clicando no seu botão `×`.


(user-manual-html-block-label)=

### Bloco HTML

Um bloco HTML permite aos usuários adicionar código HTML customizado em uma página.
Isto pode ser útil para adicionar funcionalidades ou estilos customizados em uma página, ou para integração com serviços externos ou aplicações.
Por exemplo, você pode inserir um trecho de HTML ou componente de um serviço de terceiros para embutir um calendário, botão de doação ou pagamento, ou mídia social em uma página.

```{image} ../_static/user-manual/blocks/html-block.png
:alt: Bloco HTML
```

Para usar um bloco HTML, você precisa ter algum conhecimento sobre como escrever HTML, a não ser que você receba um trecho de HTML de um terceiro que você pode copiar e colar no bloco.


(user-manual-hero-block-label)=

### Bloco hero

Um bloco hero cria um banner de largura total ou cabeçalho para uma página.
Ele é tipicamente usado para destacar conteúdo importante ou para criar um impacto visual no topo da página.

```{image} ../_static/user-manual/blocks/hero-block.png
:alt: Bloco hero
```

Blocos hero tipicamente incluem uma imagem ou cor de fundo.
Eles também podem incluir um título, descrição e links para outras páginas do seu site.

Você pode usar o editor de blocos para configurar suas opções.
Você pode configurar a imagem de fundo ou a cor, seu título, descrição e links.
Para links, você pode fornecer uma URL externa ou selecionar uma página do seu site clicando no ícone lista e fornecer um título para o link.


(user-manual-image-block-label)=

### Bloco imagem

Um bloco imagem permiter inserir uma imagem numa página e configurar seus atributos.

```{image} ../_static/user-manual/blocks/image-block.png
:alt: Bloco imagem
```

Depois da inclusão de um bloco imagem, uma imagem precisa ser especificada através de qualquer um dos seguintes métodos:
-   Escolha uma imagem existente no site clicando no ícone de lista do bloco.
-   Envie uma nova imagem ou clicando no ícone de upload do bloco ou arrastando e soltando.
-   Forneça uma URL remota da imagem na área de texto do bloco.
    Clique no ícone de seta para salvar a URL.

Depois que você especificou uma imagem, suas opções de configuração se tornar disponíveis.
```{image} ../_static/user-manual/blocks/image-block-configuration-options.png
:alt: Opções de configuração do bloco imagem
```

Origem
: Caminho ou URL para a imagem.

Texto alternativo
: Texto alternativo (alt text) é usado para leitores de tela e mecanismos de busca para descrever a imagem
  Texto alternativo não deve ser usado para imagens decorativas, pois adiciona ruído aos leitores de tela.

Alinhamento
: Opções para alinhamento incluindo a esquerda, a direita, centralizado e largura total.

Tamanho da imagem
: O tamanho da imagem determina a exibição relativa a largura, qual seja pequeno, médio ou grande

Link para
: Você pode fornecer uma URL no campo de texto, ou clicar no ícone lista e escolher uma página do site para o link alvo.
  Você pode opcionalmente fazer o link abrir em uma nova aba quando o usuário clicar nele marcando a caixa de seleção {guilabel}`Abrir em nova aba`.


(user-manual-images-grid-block-label)=

### Bloco grid de imagens

Um bloco de imagens apresenta uma linha de imagens numa página.
É usado tipicamente para mostrar uma coleção de imagens de uma maneira agradável.
Pode ser configurado para mostrar imagens em diferentes layouts e estilos.

```{image} ../_static/user-manual/blocks/images-grid-block-number-of-columns.png
:alt: Escolha o número de imagens para inserir em um bloco de grid de imagens.
```

Depois de escolher o número de imagens a inserir em um bloco de grid de imagens, você pode configurar as imagens assim como configura um única imagem em um bloco de imagem.

```{image} ../_static/user-manual/blocks/image-block-configuration-options.png
:alt: Opções de configuração do bloco de imagem.
```

Origem
: O caminho ou URL da imagem

Texto alternativo
: Texto alternativo (alt text) é usado para leitores de tela e mecanismos de busca para descrever a imagem
  Texto alternativo não deve ser usado para imagens decorativas, pois adiciona ruído aos leitores de tela.

Alinhamento
: Opções para alinhamento incluindo a esquerda, a direita, centralizado e largura total.

Tamanho da imagem
: O tamanho da imagem determina a exibição relativa a largura, qual seja pequeno, médio ou grande

Link para
: Você pode fornecer uma URL no campo de texto, ou clicar no ícone lista e escolher uma página do site para o link alvo.
  Você pode opcionalmente fazer o link abrir em uma nova aba quando o usuário clicar nele marcando a caixa de seleção {guilabel}`Abrir em nova aba`.


Você também pode gerenciar as imagens em um block de grid de imagens.

```{image} ../_static/user-manual/blocks/images-grid-block-manage-images.png
:alt: Gerencie imagens num bloco de grid de imagens
```

-   Reorganize a ordem das imagens no bloco de grid de imagens arrastando e soltando elas.
-   Adicione uma imagem ao bloc de grid de imagens clicando no botão `+` no seu lado superior esquerdo.
-   Remova uma imagem do bloco de grid de imagens clicando no seu botão `×`.


Depois da inclusão de um bloco imagem, uma imagem precisa ser especificada através de qualquer um dos seguintes métodos:
-   Escolha uma imagem existente no site clicando no ícone de lista do bloco.
-   Envie uma nova imagem ou clicando no ícone de upload do bloco ou arrastando e soltando.
-   Forneça uma URL remota da imagem na área de texto do bloco.
    Clique no ícone de seta para salvar a URL.


(user-manual-listing-block-label)=

### Listing block

A listing block allows users to display a list of content items in your Plone site on a page.
A site editor can configure the criteria to use for retrieving content items, including text, title, dates, and creator.
The retrieved results can be configured with a sort order, limit of results, and whether to batch the results with pagination.

```{image} ../_static/user-manual/blocks/listing-block.png
:alt: Listing block
```

The listing block has several configuration options.

```{image} ../_static/user-manual/blocks/listing-block-configuration.png
:alt: Listing block configuration
```

Variation
: Options for variation include {guilabel}`Default`, {guilabel}`Image gallery`, and {guilabel}`Summary`.

Headline
: Optionally add a headline to the listing block.

Headline level
: Headline level sets the level of the headline to either {guilabel}`H2` or {guilabel}`H3`.

Criteria
: Add criteria for the search.
  Options include searching metadata, dates, and text.
  Each criterion has its own options.
  For example, you can configure a search for content that was created between two dates, or for its location within a path of your Plone site.

Sort on
: Sort the retrieved results by a given option.
  Options include metadata, dates, and text.

Results limit
: Limit the number of results returned.

Item batch size
: Batch the search result items into a specified batch size.


(user-manual-maps-block-label)=

### Maps block

A map block allows a user to add a map to a page.
It is typically used to display a geographic location or region, or provide travel directions.

```{image} ../_static/user-manual/blocks/maps-block.png
:alt: Maps block
```

To use a map block, the third party map service must provide a snippet of HTML code that you can copy and paste into the map block.
Usually the snippet includes an `<iframe>` HTML tag.
After you paste the snippet into the map block's configuration, you will see additional options.

```{image} ../_static/user-manual/blocks/map-blocks-configuration.png
:alt: Maps block configuration
```

Maps URL
: The URL of the map.

Alt text
: Alternative text to display in search engine results and to screen readers.

Alignment
: Options for alignment include left, right, center, and full width.


(user-manual-search-block-label)=

### Search block

A search block provides a search interface for visitors to find content in a Plone site.
A site editor can configure its search criteria and facets across numerous parameters, including text, status, dates, and creator.
Search results can be configured with a sort order, limit of results, and whether to batch the results with pagination.
A site editor can choose which search controls to offer to the visitor, including sort order and total results.

```{image} ../_static/user-manual/blocks/search-block.png
:alt: Search block
```

You can configure the search block by modifying its options in the block editor.

```{image} ../_static/user-manual/blocks/search-block-configuration.png
:alt: Search block configuration
```

```{todo}
Add omitted configuration options.
```


#### Basic options

Variation
: Options for variation include {guilabel}`Facets on right side`, {guilabel}`Facets on right side`, and {guilabel}`Facets on top`.

Results template
: Options for results template include {guilabel}`Default`, {guilabel}`Image gallery`, and {guilabel}`Summary`.

Headline
: The value to display above the search box as a heading.


#### Base search query options

Criteria
: Add criteria for the search.
  Options include searching metadata, dates, and text.
  Each criterion has its own options.
  For example, you can configure a search for content that was created between two dates, or for its location within a path of your Plone site.

Sort on
: Sort the search results according to the selected option.
  Optionally sort results in reverse order by checking the checkbox {guilabel}`Reversed order`.

Results limit
: Limit the number of results returned.

Item batch size
: Batch the search result items into a specified batch size.


#### Facets

Section title
: ```{todo}
  This needs content.
  ```

Facets
: Click the button {guilabel}`Add Facet` to add a facet to the search.
  The first facet appears as "FACET #1".
  You can add many facets, reorder them by drag and drop, and delete them.

Label
: ```{todo}
  This needs content.
  ```

Field
: ```{todo}
  This needs content.
  ```

Facet widget
: ```{todo}
  This needs content.
  ```

Multiple choices?
: ```{todo}
  This needs content.
  ```

Hide facet?
: Toggle to show or hide the facet.
  Hidden facets will still filter the results if proper parameters are passed in URLs

Advanced facet?
: Select to set the facet as advanced.
  Advanced facets are initially hidden and displayed on demand.

#### Controls

You can configure which search controls to offer to the site visitor.

Show sorting?
: Toggle to show or hide the sorting control.

Show search input?
: Toggle to show or hide the search input field.

Show search button?
: Toggle to show or hide the search button.
  When the button is present, the auto-complete search feature is disabled, and the query is issued when the visitor types the {kbd}`Enter` key.

Show total results?
: Toggle to show or hide the search results total count.


#### Views

Available views
: Options include {guilabel}`Default`, {guilabel}`Image gallery`, and {guilabel}`Summary`.


(user-manual-table-block-label)=

### Table block

A table block inserts a table with two rows and two columns of cells to hold data, with the first row as the header row.
It is typically used to display structured data in a clear and organized way.
It can be configured to display the data in different styles and layouts.

```{image} ../_static/user-manual/blocks/table-block.png
:alt: Table block
```

You can use the editor at the top of table to add rows and columns to the table, and to delete rows and columns.

To enter data, click in a cell, and type.
You can optionally format data.

The table block has several configuration options.

```{image} ../_static/user-manual/blocks/table-block-configuration.png
:alt: Table block configuration
```

Hide headers
: Toggle to show or hide the table header row.

Make the table sortable
: Toggle to enable or disable sorting the table by the values in its columns.
  When enabled, a visitor may click a column's header to sort by that column.

Fixed width table cells
: When enabled, the columns are fixed to an equal percentage width of the table.
  For example, a table with four columns would have each of its columns fixed at 25% of the table width.

Divide each row into separate cells
: When enabled, the cells in a row are separated by a vertical border.

Stripe alternate rows with color
: When enabled, the rows in the table body are striped with alternating colors.

Make the table compact
: When enabled, padding of cells is reduced, giving a more compact appearance.

Reduce complexity
: When enabled, the top, left, and right table borders are removed.

Table color inverted
: When enabled, the table color is inverted.


(user-manual-table-of-contents-block-label)=

### Table of contents block

A table of contents (TOC) block creates a list of links to the titles and subtitles of text blocks in a page.
A TOC block makes it easier for a visitor to navigate to a section of a long or complex page.
It can be configured to display the links in different styles and layouts.

To use a TOC block, you must first have text blocks with titles or subtitles in your page.
When you add a TOC block to the page, a table of contents is automatically populated with the titles and subtitles in a bulleted list, with subtitles indented.

```{image} ../_static/user-manual/blocks/table-of-contents-block.png
:alt: Table of contents block
```

The TOC block has several configuration options.

```{image} ../_static/user-manual/blocks/table-of-contents-block-configuration.png
:alt: Table of contents block configuration
```

Variation
: Toggles the display of the TOC to be a listing (default) or horizontal as tabs.
  The horizontal variation also adds a dropdown button, if necessary, so the items that won't fit would be displayed in the dropdown list.
  ```{video} /_static/user-manual/blocks/table-of-contents-block-with-dropdown.mp4
  :alt: Table of contents block with dropdown menu.
  ```

Block title
: Optionally add a title above the table of contents.

Hide title
: When enabled, it hides the title.

Ordered
: When enabled, it changes the listing to a numbered (ordered) list.

Entries
: Selects which heading levels to display.
  Currently only heading levels `H2` (titles) and `H3` (subtitles) are supported.


(user-manual-teaser-block-label)=

### Teaser block

A teaser block displays a summary or teaser of a content item—such as an article or blog post—on a website, and links to the full content item.
When the visitor clicks or taps on the teaser block, they will visit the full content item.
A teaser block typically includes a title, an excerpt or summary of the content, and a thumbnail image or other visual element.

```{image} ../_static/user-manual/blocks/teaser-block.png
:alt: Teaser block
```

The teaser block has several configuration options.

```{image} ../_static/user-manual/blocks/teaser-block-configuration.png
:alt: Teaser block
```

Target
: The target is either an existing content item in your Plone site that can be selected by clicking the list icon, or an external URL that can be typed into the text field and saved by clicking the right arrow when it appears after you start typing.

Title
: The title is the title of the content item.

Head title
: The head title is a heading that appears above the title.

Description
: The description is plain text that summarizes or describes the content item.

Image override
: The image override is either an existing image in your Plone site that can be selected by clicking the list icon, or an external URL of an image that can be typed into the text field and saved by clicking the right arrow when it appears after you start typing.

Alignment
: The alignment of the teaser image can be set to left (default), right, or top.

(user-manual-teaser-grid-block-label)=

### Teaser grid block

```{todo}
Needs content.
```


(user-manual-text-grid-block-label)=

### Text block

```{todo}
Needs content.
```


(user-manual-video-block-label)=

### Video block

A video block allows an editor to insert a video in to a page.
Enter the URL of a video hosted by a third party, and click the right arrow to save it.
A preview of the video displays.

```{image} ../_static/user-manual/blocks/video-block.png
:alt: Video block
```

The video block has several configuration options.

```{image} ../_static/user-manual/blocks/video-block-configuration.png
:alt: Video block configuration
```

Video URL
: The URL of the video.

Preview Image URL
: Optionally set a preview image.
  You can enter a URL of an image in the text field, or click the list icon and choose an image in your website.

Alignment
: Options for alignment include left, right, center, and full width.
