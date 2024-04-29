---
myst:
  html_meta:
    "description": "Manual do portal - treinamento do Volto para Plone 6 da CMC. Explorando."
    "property=og:description": "Manual do portal - treinamento do Volto para Plone 6 da CMC. Explorando."
    "property=og:title": "Frontend"
    "keywords": "Volto, Plone, frontend, React, User manual, Manual de usuário, treinamento, explorar"
---


(explorando-label)=

# Explorando a interface do Portal do Volto na CMC

Explorando a interface no portal Volto.

(elementos-label)=

## Elementos da interface

Após a autenticação a interface apresenta alguns elementos para o gerenciamento do portal e do conteúdo do portal. Logo abaixo temos um exemplo de página inicial vazia com os elementos da interface mencionados.

```{image} ./_static/training/explorar/home-page-primeiro-login.png
:alt: Página inicial em branco
```

Ao lado esquerdo os elementos da interface permitem gerenciar o portal e o conteúdo do portal. Mais acima temos as ferramentas de ações do portal e mais abaixo as ferramentas pessoais como mostra a figura abaixo.

```{image} ./_static/training/explorar/home-page-barra-lateral.png
:alt: Página inicial com destaque para a barra com os elementos da interface
```

(barra-lateral-acoes-label)=

## Botões da barra lateral

Os botões da barra lateral são o botão editar, botão conteúdo, botão adicionar, botão de mais opções e o botão de ferramentas pessoais.

(barra-lateral-botao-editar-label)=

### Botão editar:

```{image} ./_static/training/explorar/botao-editar.png
:alt: Botão editar
```

(barra-lateral-botao-conteudo-label)=

### Botão conteúdo:

```{image} ./_static/training/explorar/botao-conteudo.png
:alt: Botão conteúdo
```

(barra-lateral-botao-adicionar-label)=

### Botão adicionar:

```{image} ./_static/training/explorar/botao-adicionar.png
:alt: Botão adicionar
```

(barra-lateral-botao-mais-opcoes-label)=

### Botão mais opções:

```{image} ./_static/training/explorar/botao-menu-mais-opcoes.png
:alt: Botão mais opções
```

(barra-lateral-botao-ferramentas-pessoais-label)=

### Botão de ferramentas pessoais:

```{image} ./_static/training/explorar/botao-ferramentas-pessoais.png
:alt: Botão de ferramentas pessoais
```

(conhecendo-acoes-label)=

## Conhecendo as ações

Para a manutenção do portal são oferecidas pelo Plone funcionalidades em forma de botões e menus de ação como você verá a seguir.

(editar-conteudo-label)=

### Editar conteúdo
Ao clicar em editar ou adicionar é possível digitar e compor o conteúdo de acordo com o tipo. Dependendo do tipo do conteúdo é exibido um tipo de formulário adequado as informações que o tipo de conteúdo precisa.

Clicar nos botões ativam funcionalidades do portal e do gerenciamento de conteúdo, como por exemplo o botão editar. Clique no botão editar para exibir o formulário de edição do conteúdo e sua aba de configurações e propriedades.

```{image} ./_static/training/explorar/edita-home.png
:alt: Página de edição de conteúdo com aba de configurações
```

Para fechar a página clique no botão cancelar, com um `X`, para abandonar qualquer alteração ou no botão salvar, com um simbolo de disquete, para preservar alterações. 

(navegar-no-conteudo-label)=

### Navegar no conteúdo

O outro botão de ação é o botão de conteúdo, clique no botão de conteúdo para exibir os ítens que estão na pasta. No caso do exemplo só existe uma pasta de imagens que chama `Image`. Para voltar basta clicar no botão com a seta para esquerda.

```{image} ./_static/training/explorar/conteudo.png
:alt: Listagem de conteúdo da pasta atual
```

(adicionar-conteudo-label)=

### Adicionar conteúdo

Clique no botão adicionar e será exibido um menu para escolher qual tipo de conteúdo adicionar.

```{image} ./_static/training/explorar/menu-adicionar.png
:alt: Listagem de conteúdo da pasta atual
```

(adiciona-tipo-arquivo-label)=

#### Tipo arquivo

Ao clicar no tipo `Arquivo` para adicionar um arquivo é apresentado o formulário de envio de arquivo e algumas abas de configuração. A primeira é a aba padrão.

```{image} ./_static/training/explorar/adiciona-arquivo-aba-padrao.png
:alt: Formulário para adicionar arquivo, aba padrão
```

Na aba de categoriazação é onde podem ser informadas algumas tags para agrupar informação similar. Também permite que seja informado conteúdo relacionado a este arquivo.

```{image} ./_static/training/explorar/adiciona-arquivo-aba-categorizacao.png
:alt: Formulário para adicionar arquivo, aba categorização
```

Na aba de datas informamos a data de publicação do arquivo e a data de expiração do arquivo.

```{image} ./_static/training/explorar/adiciona-arquivo-aba-datas.png
:alt: Formulário para adicionar arquivo, aba datas
```
Na aba de propriedade podem ser adicionados , autores, co-autores e colaboradores bem como os direitos autorais do arquivo.

```{image} ./_static/training/explorar/adiciona-arquivo-aba-propriedade.png
:alt: Formulário para adicionar arquivo, aba propriedade
```

Na aba de configurações definimos se o arquivo permite comentários, um nome curto personalizao ou se o arquivo deve ser omitido do menu de navegação.

```{image} ./_static/training/explorar/adiciona-arquivo-aba-configuracoes.png
:alt: Formulário para adicionar arquivo, aba configurações
```

(adiciona-tipo-evento-label)=

#### Tipo evento

O formulário para adicionar evento permite a composição do conteúdo e suas opções no painel de configurações.

```{image} ./_static/training/explorar/adiciona-evento.png
:alt: Formulário para adicionar evento
```

O formulário de configurações pode ser expandido para facilitar o preenchimento.

```{image} ./_static/training/explorar/adiciona-evento-expande-configuracao.png
:alt: Botão para expandir formulário de configurações do evento
```

O formulário é longo e possui várias opções, na primeira página ficam os dados de duração, como inicio e fim do evento, duração, se o evento tem final aberto.

```{image} ./_static/training/explorar/adiciona-evento-configuracao-expandida-pg1.png
:alt: Formulário de configuração do evento expandido, página 1
```

Na segunda página é informado se o evento é recorrente, os dados de local, participantes e contato.

```{image} ./_static/training/explorar/adiciona-evento-configuracao-expandida-pg2.png
:alt: Formulário de configuração do evento expandido, página 2
```

Na terceira página estão mais alguns dados de contato, o endereço eletrônico do evento e uma imagem de visualização.

```{image} ./_static/training/explorar/adiciona-evento-configuracao-expandida-pg3.png
:alt: Formulário de configuração do evento expandido, página 3
```

A página 4 permite informar os dados de categorização e datas de publicação e expiração do evento.

```{image} ./_static/training/explorar/adiciona-evento-configuracao-expandida-pg4.png
:alt: Formulário de configuração do evento expandido, página 4
```

Na quinta página são os dados de propriedade e direitos autorais.

```{image} ./_static/training/explorar/adiciona-evento-configuracao-expandida-pg5.png
:alt: Formulário de configuração do evento expandido, página 5
```
Na sexa e última página é possível configurar se o evento permite comentários, se deve ser omitido do menu de navegação, um nome curto personalizado e se o versionamento deve ser ativado.

```{image} ./_static/training/explorar/adiciona-evento-configuracao-expandida-pg6.png
:alt: Formulário de configuração do evento expandido, página 6
```

(adiciona-tipo-imagem-label)=

#### Tipo imagem

O tipo imagem segue os mesmo padrão de formulário com abas, semelhante a um tipo arquivo. As mesmas abas e informações que o tipo arquivo, aba padrão, aba de categorização, aba de datas, aba de propriedade e aba de configurações.

```{image} ./_static/training/explorar/adiciona-imagem.png
:alt: Formulário para adicionar imagem
```

(adiciona-tipo-link-label)=

#### Tipo link

O tipo link é semelhante ao tipo arquivo e ao tipo imagem. A diferença é um campo para o endereço eletrônico ao invés de um campo para enviar arquivo ou imagem.

```{image} ./_static/training/explorar/adiciona-link.png
:alt: Formulário para adicionar link
```

(adiciona-tipo-noticia-label)=

#### Tipo notícia

O tipo notícia é mais parecido com o tipo evento. Possui um formulário para compor o conteúdo da notícia e um painel para as configurações.

```{image} ./_static/training/explorar/adiciona-noticia.png
:alt: Formulário para adicionar notícia
```

O painel de configuração de notícia possui algumas páginas também. A primeira permite informar título, descrição, um arquivo de imagem e a legenda da notícia.

```{image} ./_static/training/explorar/adiciona-noticia-configuracao-expandida-pg1.png
:alt: Formulário de configuração da notícia expandido, página 1
```

Na página seguinte estão as informações de tags, idioma, itens relacionados e as datas de publicação e expiração.

```{image} ./_static/training/explorar/adiciona-noticia-configuracao-expandida-pg2.png
:alt: Formulário de configuração da notícia expandido, página 2
```

Na terceira página estão as informações de propriedade e direitos autorais.

```{image} ./_static/training/explorar/adiciona-noticia-configuracao-expandida-pg3.png
:alt: Formulário de configuração da notícia expandido, página 3
```

E na quarta página as configurações de comentários, nome curto personalizado, se a notícia deve ser omitida no menu de navegação e habilitar/desabilitar o versionamento.

```{image} ./_static/training/explorar/adiciona-noticia-configuracao-expandida-pg4.png
:alt: Formulário de configuração da notícia expandido, página 4
```

(adiciona-tipo-pagina-label)=

#### Tipo página

Ao clicar na opção para adicionar `Página` o formulário para compor a página é exibido. Ao lado direito fica o formulário de configuração da página. Esse formulário é semelhante ao tipo evento e notícia.

```{image} ./_static/training/explorar/adiciona-pagina.png
:alt: Formulário para adicionar página
```

A primeira página permite informar título, descrição, uma imagem de pré visualização e uma legenda para pré visualização.

```{image} ./_static/training/explorar/adiciona-pagina-configuracao-expandida-pg1.png
:alt: Formulário de configuração da página expandido, página 1
```

Na segunda página pode ser informado se a página permite comentário, se deve ser omitida do menu de navegação, nome curto personalizado, as tags, idioma personalizado e itens relacionados.

```{image} ./_static/training/explorar/adiciona-pagina-configuracao-expandida-pg2.png
:alt: Formulário de configuração da página expandido, página 2
```

A terceira página permite informar as datas de publicação e expiração, assim como dados de propriedade e direitos autorais.

```{image} ./_static/training/explorar/adiciona-pagina-configuracao-expandida-pg3.png
:alt: Formulário de configuração da página expandido, página 3
```

(mais-opcoes-label)=

### Mais opções

Clique no botão `Mais` para exibir o menu com mais opções, é nesse menu que encontramos a opção de compartilhamento do conteúdo.

```{image} ./_static/training/explorar/menu-mais-opcoes.png
:alt: Menu de mais opções
```

(ferramentas-pessoais-label)=

### Ferramentas pessoais

Na barra lateral, logo abaixo, clique no botão de ferramentas pessoais para exibir o menu com as opções de preferências e do perfil.

```{image} ./_static/training/explorar/menu-usuario-aluno.png
:alt: Menu de ferramentas pessoais.
```

Ao clicar em `Perfil` o formulário permite que informações pessoais sejam preenchidas. Incluindo, nome completo, email, página pessoal, biografia, localização e um retrato.


```{image} ./_static/training/explorar/perfil-usuario.png
:alt: Perfil pessoal do usuário.
```

Ao clicar em `Preferências` é aberto um menu onde é possível informar o idioma preferido do usuário.


```{image} ./_static/training/explorar/preferencias-usuario.png
:alt: Preferências pessoais do usuário.
```
