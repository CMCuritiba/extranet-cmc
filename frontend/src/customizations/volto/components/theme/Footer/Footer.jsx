/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

 import React, { Component } from 'react';
 import { Container, List, Segment , Header, Table, Icon, Image} from 'semantic-ui-react';
 import config from '@plone/volto/registry';
 import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
 import { useSelector } from 'react-redux';
 import { UniversalLink } from '@plone/volto/components';
 import LogoInterlegis from '../../../../../../theme/assets/images/logo-interlegis.png';
 import LogoCCBySA from '../../../../../../theme/assets/images/cc-by-sa-footer.png';
 
 const messages = defineMessages({
   copyright: {
     id: 'Copyright',
     defaultMessage: 'Copyright',
   },
 });
 
 /**
  * Component to display the footer.
  * @function Footer
  * @param {Object} intl Intl object
  * @returns {string} Markup of the component
  */
 const Footer = ({ intl }) => {
   const logged_in = useSelector((state) => state.userSession.token);
   const { settings } = config;
   return (
<footer role="contentinfo" id="footer-total">
        <div className="cell width-full position-0">
            <div className="row">

  <div id="portal-footer">

    

    <table className="invisible">
<tbody>
<tr><th colSpan="5" style={{textAlign: 'left'}}>
<p style={{textAlign: 'center'}}><strong><img src="https://www.curitiba.pr.leg.br/imagens-pagina-inicial/logo-cmc-branca-800600.png" title="Logo CMC branca - 800600.png" alt="Logo CMC branca - 800600.png" className="image-inline" width="300" height="150" /></strong></p>
</th></tr>
<tr><th colSpan="5" style={{textAlign: 'left'}}>
<p style={{textAlign: 'center'}}><strong>AQUI SE CONSTRÓI O FUTURO DA CIDADE&nbsp; &nbsp;|&nbsp; &nbsp;18ª LEGISLATURA (2021-2024)</strong></p>
</th></tr>
<tr><th style={{textAlign: 'left'}}><a title="" href="https://www.curitiba.pr.leg.br/institucional/capa-da-secao-institucional" className="internal-link" target="_blank">Institucional</a></th><th style={{textAlign: 'left'}}><a title="" href="https://www.curitiba.pr.leg.br/transparencia/capa-da-secao-transparencia" className="internal-link" target="_blank">Transparência</a></th><th style={{textAlign: 'left'}}><a title="" href="https://www.curitiba.pr.leg.br/vereadores/capa-da-secao-vereadores" className="internal-link" target="_blank">Vereadores</a></th><th style={{textAlign: 'left'}}><a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/capa-da-secao-atividade-parlamentar" className="internal-link" target="_blank">Atividade Parlamentar</a></th><th style={{textAlign: 'left'}}><a title="" href="https://www.curitiba.pr.leg.br/informacao/capa-da-secao-informacao" className="internal-link" target="_blank">Informação</a></th></tr>
<tr>
<td>
<ul>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/fale-com-a-camara/fale-com-a-camara" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> Fale com a Câmara</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/agenda-de-atividades/fique-por-dentro-do-calendario-de-atividades-do-poder-legislativo-de-curitiba" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Agenda de atividades</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/visite-a-cmc/capa-visite-a-camara" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Visite a CMC</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/ouvidoria" className="external-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> Ouvidoria</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/organograma/capa-da-estrutura-organizacional" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Estrutura organizacional</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/mesa-diretora/mesa-diretora_" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Mesa Diretora</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/corregedoria/capa-da-corregedoria" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Corregedoria</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/escola-do-legislativo/escola-do-legislativo" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Escola do Legislativo</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/procuradoria-da-mulher/procuradoria-da-mulher" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Procuradoria da Mulher</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/institucional/concurso-publico" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Concurso público</a></li>
<li><span className="internal-link"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <a title="" href="https://www.curitiba.pr.leg.br/institucional/programa-de-estagio/programa-de-estagio" className="internal-link" target="_self">Programa de estágio</a></span></li>
<li>&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/informacao/projetos-especiais/combate-a-covid-19/acoes-de-combate-a-pandemia-de-covid-19" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /></a>&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/institucional/planejamento-estrategico/planejamento-estrategico" className="internal-link" target="_self">Planejamento estratégico</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/informacao/projetos-especiais/combate-a-covid-19/acoes-de-combate-a-pandemia-de-covid-19" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /></a> <a className="external-link" href="https://www.tourvirtual360.com.br/camaramunicipal/" target="_blank" title="">Tour virtual</a></li>
</ul>
</td>
<td>
<ul>
<li><a title="" href="https://www.curitiba.pr.leg.br/transparencia/portal-da-transparencia/portal-da-transparencia" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="external-link">Portal da Transparência</span></a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/transparencia/acesso-a-informacao-sic/acesso-a-informacao" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="external-link">Acesso à informação (SIC)</span></a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/transparencia/perguntas-frequentes/perguntas-frequentes" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link">Perguntas Frequentes (FAQ)</span></a></li>
<li><a className="external-link" href="https://cmcuritiba.eloweb.net/portaltransparencia/licitacoes" target="_blank" title=""><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="external-link">Compras e licitações</span></a></li>
<li><a className="external-link" href="https://cmcuritiba.eloweb.net/portaltransparencia/repasses/receita" target="_blank" title=""><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <span className="external-link">Receitas e despesas</span></a></li>
<li><a className="external-link" href="https://cmcuritiba.eloweb.net/portaltransparencia/servidores" target="_blank" title=""><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="external-link">Servidores públicos</span></a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a className="external-link" href="https://legisladocexterno.curitiba.pr.gov.br/diarioconsultaexterna_pesquisa.aspx" target="_blank" title="">Diário do Município</a></li>
<li><a className="external-link" href="https://www.cmc.pr.gov.br/wspl/sistema/DiarioForm.do?mostrar_action=&amp;first_time=true" target="_blank" title=""><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="external-link">Diário da Câmara</span></a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/transparencia/contas-municipais/contas-municipais" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="external-link">Contas Municipais</span></a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/transparencia/controladoria-do-legislativo" className="internal-link" target="_blank">Controladoria do Legislativo</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/transparencia/prestacao-de-contas/prestacao-de-contas" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title=""/ > Prestação de contas</a></li>
</ul>
</td>
<td>
<ul>
<li><a title="" href="https://www.curitiba.pr.leg.br/vereadores/quem-sao/quem-sao-18" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link">Quem são</span></a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link"><a title="" href="https://www.curitiba.pr.leg.br/vereadores/liderancas-e-blocos-parlamentares/conheca-os-lideres-de-partidos-e-blocos-e-suas-funcoes" className="internal-link" target="_blank">Lideranças e blocos<br /> parlamentares</a></span></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <span className="internal-link"><span className="internal-link"><a title="" href="https://www.curitiba.pr.leg.br/vereadores/colegio-de-lideres/colegio-de-lideres" className="internal-link" target="_self">Colégio de Líderes</a><br /></span></span></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link"><a title="" href="https://www.curitiba.pr.leg.br/vereadores/frentes-parlamentares/capa-de-frentes-parlamentares" className="internal-link" target="_blank">Frentes parlamentares</a></span></li>
<li><span className="internal-link">&nbsp;<img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <a title="" href="https://www.curitiba.pr.leg.br/vereadores/lista-de-presenca/lista-de-presenca" className="internal-link" target="_blank">Listas de presença</a></span></li>
<li><span className="internal-link"><span className="internal-link"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <span className="internal-link"><a title="" href="https://www.curitiba.pr.leg.br/vereadores/representacao-externa/representacao-externa" className="internal-link" target="_blank">Representação externa</a><br /></span></span></span></li>
<li><span className="internal-link">&nbsp;<img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <a title="" href="https://www.curitiba.pr.leg.br/informacao/projetos-especiais/eleicoes-2016" className="internal-link" target="_blank">Eleições 2016</a></span><br /><span className="internal-link"></span></li>
<li><span className="internal-link">&nbsp;<img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <a title="" href="https://www.curitiba.pr.leg.br/informacao/projetos-especiais/eleicoes-2020/eleicoes-2020" className="internal-link" target="_blank">Eleições 2020</a></span></li>
</ul>
</td>
<td>
<ul>
<li><a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/projetos-de-lei/projetos-de-lei" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link">Projetos de lei</span></a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/requerimentos/consulta-requerimentos" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link">Requerimentos</span></a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/comissoes-permanentes/copy_of_capa-de-comissoes-permanentes" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link">Comissões permanentes</span></a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/comissoes-temporarias/capa-de-comissoes-temporarias" className="internal-link" target="_blank">Comissões temporárias</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/conselho-de-etica-e-decoro-parlamentar" className="internal-link" target="_blank">Conselho de Ética<br />e Decoro Parlamentar</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/audiencias-publicas" className="internal-link" target="_blank">Audiências públicas</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/tribunas-livres/tribunas-livres" className="internal-link" target="_blank">Tribunas Livres</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/sessoes-solenes" className="internal-link" target="_blank">Sessões solenes</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/ciclo-orcamentario/ciclo-orcamentario" className="internal-link" target="_self"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> Orçamento da cidade</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/legislacao/legislacao" className="internal-link" target="_blank">Legislação</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/agora-e-lei/agora-e-lei" className="internal-link" target="_self">Agora é lei</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/atividade-parlamentar/banco-de-ideias-legislativas/banco-de-ideias-legislativas" className="internal-link" target="_self">Banco de ideias</a></li>
</ul>
</td>
<td>
<ul>
<li><a title="" href="https://www.curitiba.pr.leg.br/informacao/noticias" className="external-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link">Notícias</span></a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> <a title="" href="https://www.curitiba.pr.leg.br/informacao/midias-sociais" className="internal-link" target="_blank">Mídias sociais</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /><a title="" href="https://www.curitiba.pr.leg.br/informacao/assessoria-de-imprensa" className="internal-link" target="_blank">&nbsp;Assessoria de imprensa</a></li>
<li><a title="" href="https://www.curitiba.pr.leg.br/informacao/projetos-especiais/projetos-especiais" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /><span className="internal-link"> Coberturas especiais</span></a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/informacao/nossa-memoria/capa-de-nossa-memoria" className="internal-link" target="_blank">Nossa Memória</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/informacao/dicionario-do-legislativo/capa-do-dicionario-legislativo" className="internal-link" target="_blank">Dicionário do Legislativo</a></li>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/informacao/avalie-o-site-da-cmc/avalie-o-site-da-cmc" className="internal-link" target="_self">Avalie o site da CMC</a></li>
</ul>
</td>
</tr>
<tr>
<td>
<div><strong><a title="" href="https://www.curitiba.pr.leg.br/servicos-internos/servicos-internos" className="internal-link" target="_blank"><span className="internal-link">Serviços internos</span></a></strong></div>
</td>
<th></th>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<th></th>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<th></th>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td></td>
<th></th>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td colSpan="5" style={{textAlign: 'center'}}><strong><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp; &nbsp;INFORMAÇÕES ÚTEIS SOBRE O FUNCIONAMENTO DA CÂMARA MUNICIPAL DE CURITIBA&nbsp; &nbsp;</strong></td>
</tr>
<tr>
<td colSpan="5" style={{textAlign: 'center'}}><strong></strong></td>
</tr>
<tr>
<td>
<div style={{textAlign: 'left'}}><strong>Sessões plenárias<br /></strong></div>
</td>
<td className=" " style={{textAlign: 'left'}}><strong>Gabinetes</strong></td>
<td><strong>Expediente da CMC</strong></td>
<td><strong>Entre em contato</strong></td>
<td></td>
</tr>
<tr>
<td colSpan="0" rowSpan="-2" style={{textAlign:'left'}}><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Segundas, terças e quartas-feiras,<br /> das 9h às 12h, no Palácio Rio<br /> Branco. Entrada pela rua<br /> Barão do Rio Branco, nº 720.<br /><br /><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a className="external-link" href="https://www.youtube.com/camaramunicipaldecuritiba" target="_blank" title="">Assista às transmissões das<br />sessões em nossas redes sociais.</a></td>
<td><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;Anexo 1 - entrada pela praça<br /> Eufrásio Correia.<br /><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> Anexo 2 - entrada pela avenida <br />Visconde de Guarapuava, esquina <br />com a rua Lourenço Pinto.<br /><br /><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<a title="" href="https://www.curitiba.pr.leg.br/vereadores/quem-sao/quem-sao-18" className="internal-link" target="_blank">Veja aqui a localização do<br /> gabinete de cada vereador.</a></td>
<td>
<div>
<ul>
<li><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;De segunda a sexta, <br />das 8h às 12h e das<br />14h às 18h.<br /><br /><a title="" href="https://www.curitiba.pr.leg.br/institucional/agenda-de-atividades/fique-por-dentro-do-calendario-de-atividades-do-poder-legislativo-de-curitiba" className="internal-link" target="_blank"><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;<span className="internal-link">Confira a nossa<br /> agenda de eventos.</span></a></li>
</ul>
</div>
</td>
<td>
<div><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" /> Telefone: (41) 3350-4500<br />E-mail: camara@cmc.pr.gov.br<br /><br />Para elogios, reclamações, dúvidas<br /> ou sugestões, acione a <a title="" href="https://www.curitiba.pr.leg.br/institucional/ouvidoria" className="external-link" target="_blank"><span className="internal-link"><strong>Ouvidoria</strong></span></a>.<br /><br /><strong>Também pelas redes<br /></strong><br /><a className="external-link" href="https://www.instagram.com/camaradecuritiba/" target="_blank" title=""><img src="https://www.curitiba.pr.leg.br/institucional/imagens/seta-link-dupla-13_20.png" alt="" className="image-inline" title="" />&nbsp;&nbsp;<img src="https://www.curitiba.pr.leg.br/vereadores/imagens/icones-redes-sociais/insta.png" title="Insta.png" alt="Insta.png" className="image-inline" width="25" height="21,4" /></a>&nbsp;<a className="external-link" href="https://www.facebook.com/CamaraCuritiba/" target="_blank" title=""><img src="https://www.curitiba.pr.leg.br/vereadores/imagens/icones-redes-sociais/Face.png" title="" alt="" className="image-inline" width="25" height="21,4" /></a>&nbsp;<a className="external-link" href="https://twitter.com/CamaraCuritiba" target="_blank" title=""><img src="https://www.curitiba.pr.leg.br/vereadores/imagens/icones-redes-sociais/twitter.png" title="Twitter.png" alt="Twitter.png" className="image-inline" width="25" height="21,4" /></a>&nbsp;<a className="external-link" href="https://www.youtube.com/camaramunicipaldecuritiba" target="_blank" title=""><img src="https://www.curitiba.pr.leg.br/vereadores/imagens/icones-redes-sociais/youtube.png" title="Youtube.png" alt="Youtube.png" className="image-inline" width="25" height="21,4" /><br /></a></div>
<div></div>
<div></div>
<div><br /><br /></div>
<div style={{textAlign: 'left'}}><strong><a title="" href="https://www.curitiba.pr.leg.br/front-page" className="internal-link" target="_self">PÁGINA INICIAL DO SITE<br /></a></strong></div>
</td>
</tr>
<tr>
<td colSpan="5" style={{textAlign: 'left'}}><a title="" href="https://www.curitiba.pr.leg.br/front-page" className="internal-link" target="_self"></a></td>
</tr>
</tbody>
</table>
<p style={{textAlign: 'right'}}><strong><a className="external-link" href="http://https//pm3.cmc.pr.gov.br/" target="_self" title="">&nbsp;</a></strong></p>

    <p className="visualClear"></p>

  </div>

  <p className="visualClear"></p>

</div>


<div className="row">

    <div id="portal-colophon">
    
      <div className="colophon-item">
        <a className="colophon-logo interlegis" href="http://www.interlegis.leg.br/">
          <img alt="Logotipo do Interlegis" src="https://www.curitiba.pr.leg.br/++resource++portalmodelo.theme/images/interlegis-white.png" />
        </a>
        <div className="colophon-info">
          Este site é feito com o software livre e aberto <a href="http://www.interlegis.leg.br/portalmodelo">Portal Modelo</a> desenvolvido pelo <a href="http://www.interlegis.leg.br">Interlegis</a> e roda sobre o CMS <a href="http://plone.org">Plone</a>.
        </div>
      </div>
    
      <div className="colophon-item">
        <a className="colophon-logo creative-commons" href="http://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">
          <img alt="Selo Creative Commons BY-SA" src="https://www.curitiba.pr.leg.br/++resource++portalmodelo.theme/images/cc-by-sa-white.png" />
        </a>
        <div className="colophon-info">
          Os conteúdos e dados deste site estão publicados sob a licença <a href="http://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">Creative Commons 4.0 — Atribuir Fonte - Compartilhar Igual.</a>
        </div>
      </div>
    
    </div>

</div>
        </div>
    </footer>
   );
 };
 
 /**
  * Property types.
  * @property {Object} propTypes Property types.
  * @static
  */
 Footer.propTypes = {
   /**
    * i18n object
    */
 };
 
 export default injectIntl(Footer);
 
