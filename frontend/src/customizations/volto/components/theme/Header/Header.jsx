/**
 * Header component.
 * @module components/theme/Header/Header
 */

 import React, { Component } from 'react';
 import { Container, Segment } from 'semantic-ui-react';
 import PropTypes from 'prop-types';
 import { connect } from 'react-redux';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faDiscord,
  faAccessibleIcon
} from '@fortawesome/free-brands-svg-icons'; 
import {
  faCircle,
  faHands,
  faEnvelope,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'; 
 import {
   Anontools,
   LanguageSelector,
   Logo,
   Navigation,
   SearchWidget,
 } from '@plone/volto/components';
 
import './Header.css';

 /**
  * Header component class.
  * @class Header
  * @extends Component
  */
 class Header extends Component {
   /**
    * Property types.
    * @property {Object} propTypes Property types.
    * @static
    */
   static propTypes = {
     token: PropTypes.string,
     pathname: PropTypes.string.isRequired,
   };
 
   /**
    * Default properties.
    * @property {Object} defaultProps Default properties.
    * @static
    */
   static defaultProps = {
     token: null,
   };
 
   /**
    * Render method.
    * @method render
    * @returns {string} Markup for the component.
    */
   render() {
     return (
<header role="banner">
            <div id="header-banner">

                <div id="logo">
                    <a href="https://www.curitiba.pr.leg.br" title="Portal da Câmara Municipal de Curitiba" accessKey="1">
                        <img src="https://www.curitiba.pr.leg.br/logo.png" alt="Portal da Câmara Municipal de Curitiba" title="Portal da Câmara Municipal de Curitiba" width="92" height="85" />
                    </a>
                    <h1>
                        <a href="https://www.curitiba.pr.leg.br" title="Portal da Câmara Municipal de Curitiba" accessKey="1">
                            Câmara Municipal de <span>Curitiba</span>
                        </a>
                    </h1>
                </div>


                <ul id="siteactions">

    <li id="siteaction-sitemap"><a href="https://www.curitiba.pr.leg.br/sitemap" accessKey="3" title="Mapa do Site">Mapa do Site</a></li>
    <li id="siteaction-accessibility"><a href="https://www.curitiba.pr.leg.br/acessibilidade" accessKey="0" title="Acessibilidade">Acessibilidade</a></li>
    <li id="siteaction-contato"><a href="https://www.curitiba.pr.leg.br/institucional/fale-com-a-camara" accessKey="" title="Contato">Contato</a></li>
    <li id="siteaction-vlibras"><a href="http://www.vlibras.gov.br/" accessKey="" title="VLibras">VLibras</a></li>
    <li id="siteaction-contraste"><a href="#" accessKey="" title="Contraste">Contraste</a></li>
    <li id="siteaction-login"><a href="https://www.curitiba.pr.leg.br/login" accessKey="" title="Acessar">Acessar</a></li>
</ul>


                <div id="portal-searchbox">

    <form id="livesearch0" action="https://www.curitiba.pr.leg.br/@@search">

        <div className="LSBox">
        <label className="hiddenStructure" htmlFor="searchGadget">Busca</label>

        <input name="SearchableText" type="text" size="18" title="Buscar no Site" placeholder="Buscar no Site" accessKey="4" className="searchField" id="searchGadget" autoComplete="off" />

        <input className="searchButton" type="submit" value="Buscar" />

        

        <div className="LSResult" id="LSResult"><div className="LSShadow" id="LSShadow"></div></div>
        </div>
    </form>

    <div id="portal-advanced-search" className="hiddenStructure">
        <a href="https://www.curitiba.pr.leg.br/@@search" accessKey="5">Busca Avançada…</a>
    </div>
</div>
            </div>
                <nav id="main-navigation" role="navigation">
                    <a className="abrefecha">
                        <i className="fas fa-bars" aria-hidden="true"></i>
                        <i className="fas fa-times" aria-hidden="true"></i>
                        <span className="menu-title">Menu</span>
                    </a>

                    <ul id="redes-sociais">
                        <li>
                            <a href="https://www.facebook.com/CamaraCuritiba/">
                                <i className="fab fa-facebook-square" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/CamaraCuritiba">
                                <i className="fab fa-twitter-square" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/camaradecuritiba/">
                                <i className="fab fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/camaramunicipaldecuritiba">
                                <i className="fab fa-youtube" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.flickr.com/photos/camaracuritiba/">
                                <i className="fab fa-flickr" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="https://open.spotify.com/show/77uZ6a7lpDGWPnyMy2ABCo">
                                <i className="fab fa-spotify" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                    <ul id="destaques">
                        <li><a href="/institucional/fale-com-a-camara" title="Entre em contato">Entre em contato</a></li>
                        <li><a href="/transparencia/portal-da-transparencia-1" title="Portal da Transparência">Portal da Transparência</a></li>
                    </ul>
                </nav>
</header>
     );
   }
 }
 
 export default connect((state) => ({
   token: state.userSession.token,
 }))(Header);
