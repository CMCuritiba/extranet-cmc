---
myst:
  html_meta:
    "description": "Manual do portal - treinamento do Volto para Plone 6 da CMC. Publicando."
    "property=og:description": "Manual do portal - treinamento do Volto para Plone 6 da CMC. Publicando."
    "property=og:title": "Frontend"
    "keywords": "Volto, Plone, frontend, React, User manual, Manual de usuário, treinamento, publicar"
---


(publicando-label)=

# Publicando conteúdo do portal do volto na cmc

O workflow de publicação padrão do Plone tem um mecanismo baseado em usuários, grupos, papéis e permissões. Para a demostração nesse treinamento foram criados 5 alunos para abranger a variedade de papés do Plone.

Menu de ferramentas do usuário Aluno 1.

```{image} ./_static/training/publicar/ferramentas-aluno1.png
:alt: Menu de ferramentas do usuário Aluno 1
```

--

Menu de ferramentas do usuário Aluno 2.

```{image} ./_static/training/publicar/ferramentas-aluno2.png
:alt: Menu de ferramentas do usuário Aluno 2
```

--

Menu de ferramentas do usuário Aluno 3.

```{image} ./_static/training/publicar/ferramentas-aluno3.png
:alt: Menu de ferramentas do usuário Aluno 3
```

--

Menu de ferramentas do usuário Aluno 4.

```{image} ./_static/training/publicar/ferramentas-aluno4.png
:alt: Menu de ferramentas do usuário Aluno 4
```

--

Menu de ferramentas do usuário Aluno 5.

```{image} ./_static/training/publicar/ferramentas-aluno5.png
:alt: Menu de ferramentas do usuário Aluno 5
```


## Permissões e papéis dos usuários alunos

As permissões no Plone permitem que o usuário possa realizar certa ação. Os papéis são conjuntos de permissões que podem ser atribuídas a usuários ou grupos.

Para o treinamento foram configuradas alguns papéis para os usuários criados. O usuário Aluno 1 é `Colaborador` e `Revisor`. O usuário Aluno 2 é `Editor` e `Revisor`. O usuário Aluno 3 é `Membro` apenas. O usuário Aluno 4 é `Leitor` apenas. O usuário Aluno 5 é `Revisor` apenas.

Papéis atribuídos aos usuários criados.

```{image} ./_static/training/publicar/configuracoes-usuarios-alunos.png
:alt: Papéis atribuídos aos usuários criados
```

## Permissões padrão dos usuários alunos

Os papéis atribuídos concedem as seguintes permissões para os usuários criados. O usuário Aluno 1 pode adicionar conteúdo e revisar. O usuário Aluno 2 pode editar e revisar. O usuário Aluno 3 pode apenas ler conteúdo publicado. O usuário Aluno 4 pode ler conteúdo privado. O usuário Aluno 5 pode revisar.

Permissões dos usuários criados.

```{image} ./_static/training/publicar/permissoes-padrao-alunos.png
:alt: Permissões dos usuários criados
```

## Workflow de publicação

Os itens de conteúdo do Plone podem estar em 3 estados no workflow padrão. O estado privado, em revisão ou publicado. Um usuário membro só pode ver conteúdo publicado e não pode alterar nada. Um usuário leitor pode ver conteúdo privado, mas também não pode alterar o ítem. Um usuário contribuidor pode ver conteúdo privado, pode adicionar conteúdo, usar controle de versão, só não pode editar conteúdo de outros usuários. Quando um usuário cria conteúdo, ele se torna o dono do conteúdo com permissão de alterar o conteúdo em qualquer estado que o conteúdo esteja. Um usuário editor pode editar conteúdo, usar o controle de versão, gerenciar propriedades do item de conteúdo, enviar conteúdo para publicação mas não pode adicionar conteúdo. Um usuário revisor pode enviar um documento para publicação ou enviar de volta ao autor, mas não pode alterar o documento.  

Diagrama com o workflow padrão do Plone. O usuário autor cria um documento e pode realizar qualquer ação no documento, o estado padrão é privado. O usuário editor pode alterar o documento e enviar para revisão. Ao enviar para revisão o documento passa para o estado em revisão. No estado em revisão, o usuário revisor pode publicar ou enviar de volta ao autor para mudanças, o documento volta ao estado privado quando volta ao autor. 

```{image} ./_static/training/publicar/workflow.png
:alt: Diagrama com o workflow padrão do Plone
```

## Usuário anônimo acesso a noticias publicadas

Quando o documento é publicado usuários sem autenticação, anônimo, podem ler o conteúdo.

Notícias visíveis para usuário anônimo quando estão publicadas.

```{image} ./_static/training/publicar/inicio-usuario-anonimo-noticias-publicadas.png
:alt: Notícias visíveis para usuário anônimo quando estão publicadas
```

## Usuário anônimo sem acesso conteúdo privado

Quando o documento está em um estado privado usuários sem autenticação, anônimo, não podem ler o conteúdo.

Notícias indisponíveis para usuário anônimo quando estão em estado privado.

```{image} ./_static/training/publicar/inicio-usuario-anonimo-conteudo-privado.png
:alt: Notícias indisponíveis para usuário anônimo quando estã em estado privado
```

## Papéis e a vizualização de conteúdo

De acordo com os papéis e permissões atribuídos ao usuário ele pode acessar conteúdo privado.

### Visibilidade de conteúdo privado

Os usuários `Autor`, `Colaborador` e `Editor` tem acesso a conteúdo privado, sendo que o `Colaborador` só pode ler o conteúdo. Os usuários `Membro` e `Revisor` não tem acesso a conteúdo privado.

Visibilidade de conteúdo privado para usuário Aluno 1.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno1-visivel.png
:alt: Visibilidade de conteúdo privado para usuário Aluno 1
```

Visibilidade de conteúdo privado para usuário Aluno 2.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno2-visivel.png
:alt: Visibilidade de conteúdo privado para usuário Aluno 2
```

Visibilidade de conteúdo privado para usuário Aluno 3, indisponível.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno3-indisponivel.png
:alt: Visibilidade de conteúdo privado para usuário Aluno 3, indisponível
```

Visibilidade de conteúdo privado para usuário Aluno 4.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno4-visivel.png
:alt: Visibilidade de conteúdo privado para usuário Aluno 4
```

Visibilidade de conteúdo privado para usuário Aluno 5, indisponível.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno5-indisponivel.png
:alt: Visibilidade de conteúdo privado para usuário Aluno 5, indisponível
```

### Visibilidade de conteúdo em revisão

Os usuários `Autor`, `Colaborador`, `Editor` e `Revisor` tem acesso a conteúdo Em revisão. Atenção que o usuário `Colaborador` só pode ler o conteúdo e o `Revisor` pode enviar de volta ao `Autor`. O usuário `Membro` não tem acesso a conteúdo `Em revisão`.

Visibilidade de conteúdo em revisão para usuário Aluno 1.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno1-visivel.png
:alt: Visibilidade de conteúdo em revisão para usuário Aluno 1
```

Visibilidade de conteúdo em revisão para usuário Aluno 2.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno2-visivel.png
:alt: Visibilidade de conteúdo em revisão para usuário Aluno 2
```

Visibilidade de conteúdo em revisão para usuário Aluno 3, indisponível.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno3-indisponivel.png
:alt: Visibilidade de conteúdo em revisão para usuário Aluno 3, indisponível
```

Visibilidade de conteúdo em revisão para usuário Aluno 4.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno4-visivel.png
:alt: Visibilidade de conteúdo em revisão para usuário Aluno 4
```

Visibilidade de conteúdo em revisão para usuário Aluno 5, indisponível.

```{image} ./_static/training/publicar/inicio-conteudo-privado-usuario-aluno5-indisponivel.png
:alt: Visibilidade de conteúdo em revisão para usuário Aluno 5, indisponível
```

## Disponibilidade de botões de ação

De acordo com as permissões de cada um são apresentados botões de ação específicos. O botão adicionar é um exemplo, só está disponível para quem pode criar conteúdo. O botão editar aparece para quem pode modificar o documento e assim por diante.

O usuário Aluno 1 tem a permissão de criar conteúdo, então o botão adicionar está disponível. Entretanto o botão editar não está disponível pois ele não pode alterar o documento. Ele pode navegar pelo conteúdo, portanto o botão de conteúdo também está disponível.

```{image} ./_static/training/publicar/botao-adicionar-usuario-aluno1.png
:alt: Botões disponiveis para usuário Aluno 1 - botão conteúdo e botão adicionar.
```

O usuário Aluno 2 não tem a permissão para criar documento, então o botão de adição está indisponível. O usuário Aluno 2 tem a permissão de modificar o documento, portanto o botão de edição está disponível. Ele pode navegar pelo conteúdo por isso o botão de conteúdo também está disponível.

```{image} ./_static/training/publicar/botao-adicionar-usuario-aluno2-indisponivel.png
:alt: Botões disponiveis para usuário Aluno 2 - botão conteúdo e botão editar.
```

O usuário Aluno 3 não tem permissão de criar conteúdo, não tem a permissão de modificar conteúdo e nem pode navegar pelo conteúdo, então nenhum destes botões está disponível. 

```{image} ./_static/training/publicar/botoes-acao-usuario-aluno3-indisponiveis.png
:alt: Botões adicionar, editar e conteúdo indisponiveis para usuário Aluno 3
```

O usuário Aluno 4 não tem permissão de criar conteúdo, não tem a permissão de modificar conteúdo e nem pode navegar pelo conteúdo, então nenhum destes botões está disponível. 

```{image} ./_static/training/publicar/botoes-acao-usuario-aluno4-indisponiveis.png
:alt: Botões adicionar, editar e conteúdo indisponiveis para usuário Aluno 4
```

O usuário Aluno 5 não tem a permissão para criar documento e não tem a permissão de modificar o documento. O usuário Aluno 5 tem permissão de navegar no conteúdo, então apenas o botão de conteúdo está disponível.

```{image} ./_static/training/publicar/botao-adicionar-usuario-aluno5-indisponivel.png
:alt: Botões disponiveis para usuário Aluno 5 - apenas o botão conteúdo
```

## Disponibilidade de mais opções de ação

Além dos botões de ação as permissões dão acesso a itens do menu de mais opções, que é aberto quando se clica no ícone de reticências (3 pontos seguidos).

Para o usuário Aluno 1 estão disponíveis as opções de Estado, Histório, Compartilhamento e Links e referências.

```{image} ./_static/training/publicar/botao-mais-opcoes-compartilhamento-usuario-aluno1.png
:alt: Opções disponíveis para usuário Aluno 1 - Estado, Histórico, Compartilhamento e Links e referências
```

Para o usuário Aluno 2 estão disponíveis as opções de `Estado`, `Histório`, `Compartilhamento`, `Gerenciamento de url` e `Links e referências`.

```{image} ./_static/training/publicar/botao-mais-opcoes-compartilhamento-usuario-aluno2.png
:alt: Opções disponíveis para usuário Aluno 2 - Estado, Histório, Compartilhamento, Gerenciamento de URLS e Links e referências
```

Para o usuário Aluno 3 estão disponíveis as opções de Estado (somente leitura), Histório e Links e referências.

```{image} ./_static/training/publicar/botao-mais-opcoes-compartilhamento-usuario-aluno3-indisponivel.png
:alt: Opções disponíveis para usuário Aluno 3 - Estado (somente leitura), Histório e Links e referências
```

Para o usuário Aluno 4 estão disponíveis as opções de Estado (somente leitura), Histório e Links e referências.

```{image} ./_static/training/publicar/botao-mais-opcoes-compartilhamento-usuario-aluno4-indisponivel.png
:alt: Opções disponíveis para usuário Aluno 4 - Estado (somente leitura), Histório e Links e referências
```

Para o usuário Aluno 5 está disponível apenas a opção de Compartilhamento.

```{image} ./_static/training/publicar/botao-mais-opcoes-compartilhamento-usuario-aluno5.png
:alt: Opções disponíveis para usuário Aluno 5 - Compartilhamento
```

### Estados

As permissões também afetam o que cada usuário pode fazer em termos de transição de estados. O usuário Aluno 1 pode publicar o documento quando o documento está no estado privado.

```{image} ./_static/training/publicar/botao-mais-opcoes-estado-privado-menu-usuario-aluno1.png
:alt: Itens do menu de estados para usuário Aluno 1 no estado privado - Publicar e Privado
```
O usuário Aluno 2 além de poder publicar o documento ele pode enviar para publicação. Quando o documento é enviado para publicação ele entra no estado Em revisão.

```{image} ./_static/training/publicar/botao-mais-opcoes-estado-privado-menu-usuario-aluno2.png
:alt: Itens do menu de estados para usuário Aluno 2 no estado privado - Publicar, Enviar para publicação e Privado
```
O usuário Aluno 1 pode enviar o documento de volta ao autor. Quando o documento é enviado de volta ele entra novamente no estado privado.

```{image} ./_static/training/publicar/botao-mais-opcoes-estado-publicado-menu-usuario-aluno1.png
:alt: Itens do menu de estados para usuário Aluno 1 no estado publicado - Enviar de volta e Publicado
```

O usuário Aluno 2 pode enviar o documento de volta e também pode retirar o documento. Em ambos os casos o documento volta ao estado privado.

```{image} ./_static/training/publicar/botao-mais-opcoes-estado-publicado-menu-usuario-aluno2.png
:alt: Itens do menu de estados para usuário Aluno 2 no estado publicado - Enviar de volta, Retirar e Publicado
```

O usuário Aluno 1 não tem acesso ao documento quando ele está em revisão. O usuário Aluno 2 pode publicar, pode enviar de volta ou retirar o documento quando o documento está em revisão.

```{image} ./_static/training/publicar/botao-mais-opcoes-estado-revisao-usuario-aluno2.png
:alt: Itens do menu de estados para usuário Aluno 2 no estado em revisão - Publicar, Enviar de volta, Retirar e Revisão pendente
```

O usuário Aluno 3 não tem acesso ao documento nem no estado privado nem no estado em revisão. O usuário Aluno 4 tem acesso somente leitura ao menu de estados.

```{image} ./_static/training/publicar/botao-mais-opcoes-estados-menu-desabilitado.png
:alt: Menu de estados somente leitura
```

O usuário Aluno 5 pode revisar o documento e enviar o documento de volta ou então publicar.

```{image} ./_static/training/publicar/botao-mais-opcoes-estado-revisao-usuario-aluno5.png
:alt: Itens do menu de estados para usuário Aluno 5 no estado em revisão - Publicar, Enviar de volta e Revisão pendente
```

### Histórico

O histórico também é afetado pelas permissões, o usuário Aluno 1 tem visibilidade ao menu de Histórico.

```{image} ./_static/training/publicar/botao-mais-opcoes-historico-usuario-aluno1.png
:alt: Botão histórico visível para usuário Aluno 1
```

Ao clicar no item de menu Histórico o usuário Aluno 1 recebe uma mensagem. O acesso a esse recurso é restrito pois ele não tem permissão de ler o histórico de mudanças.

```{image} ./_static/training/publicar/historico-noticias-usuario-aluno1-restrito.png
:alt: Histórico restrito para usuário Aluno 1
```

O usuário Aluno 2 também tem visibilidade ao menu Histórico. 

```{image} ./_static/training/publicar/botao-mais-opcoes-historico-usuario-aluno2.png
:alt: Botão histórico visível para usuário Aluno 2
```

O usuário Aluno 2 tem acesso a página do histórico de mudanças do documento.

```{image} ./_static/training/publicar/historico-noticias-usuario-aluno2.png
:alt: Histórico de mudanças disponível para usuário Aluno 2
```

O usuário Aluno 3 não tem acesso ao menu e nem ao histórico de mudanças. O usuário Aluno 4 tem visibilidade ao menu de Histórico.

```{image} ./_static/training/publicar/botao-mais-opcoes-historico-usuario-aluno4.png
:alt: Botão histórico visível para usuário Aluno 4
```

Ao clicar no item de menu Histórico o usuário Aluno 4 recebe uma mensagem. O acesso a esse recurso é restrito pois ele não tem permissão de ler o histórico de mudanças.

```{image} ./_static/training/publicar/historico-noticias-usuario-aluno4-restrito.png
:alt: Histórico restrito para usuário Aluno 4
```

O usuário Aluno 5 também tem visibilidade ao menu Histórico se o documento estiver em revisão. 

```{image} ./_static/training/publicar/botao-mais-opcoes-historico-usuario-aluno5.png
:alt: Botão histórico visível para usuário Aluno 5 no estado em revisão
```

O usuário Aluno 5 tem acesso a página do histórico de mudanças do documento se o documento estiver em revisão.

```{image} ./_static/training/publicar/historico-noticias-usuario-aluno5.png
:alt: Histórico de mudanças disponível para usuário Aluno 5 no estado em revisão
```

### Links e referências

O usuário Aluno 1 pode ver o item de menu Links e referencias.

```{image} ./_static/training/publicar/botao-mais-opcoes-links-e-referencias-usuario-aluno1.png
:alt: Botão links e referencias visível para usuário Aluno 1
```

Ao clicar no menu Links e referencias o usuário Aluno 1 recebe a mensagem de que não é autorizado a ver os links e referências do documento.

```{image} ./_static/training/publicar/links-e-referencias-noticias-usuario-aluno1-nao-autorizado.png
:alt: Usuário Aluno 1 não autorizado a página de links e referências
```

O usuário Aluno 2 pode ver o item de menu Links e referencias.

```{image} ./_static/training/publicar/botao-mais-opcoes-links-e-referencias-usuario-aluno2.png
:alt: Botão links e referencias visível para usuário Aluno 2
```

O usuário Aluno 2 tem acesso aos links e referencias do documento.

```{image} ./_static/training/publicar/links-e-referencias-noticias-usuario-aluno2.png
:alt: Usuário Aluno 2 autorizado a página de links e referências
```

O usuário Aluno 3 não tem acesso ao documento, exceto quando for publicado.

O usuário Aluno 4 pode ver o item de menu Links e referencias.

```{image} ./_static/training/publicar/botao-mais-opcoes-links-e-referencias-usuario-aluno4.png
:alt: Botão links e referencias visível para usuário Aluno 4
```

O usuário Aluno 4 tem acesso aos links e referencias do documento.

```{image} ./_static/training/publicar/links-e-referencias-noticias-usuario-aluno4.png
:alt: Usuário Aluno 4 autorizado a página de links e referências
```

O usuário Aluno 5 pode ver o item de menu Links e referencias quando o documento está no estado em revisão.

```{image} ./_static/training/publicar/botao-mais-opcoes-links-e-referencias-usuario-aluno5.png
:alt: Botão links e referencias visível para usuário Aluno 5 no estado em revisão
```

O usuário Aluno 5 tem acesso aos links e referencias do documento quando o documento está no estado em revisão.

```{image} ./_static/training/publicar/links-e-referencias-noticias-usuario-aluno5.png
:alt: Usuário Aluno 5 autorizado a página de links e referências
```