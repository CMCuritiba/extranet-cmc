/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React, { Component } from 'react';
import {
  Container,
  List,
  Segment,
  Header,
  Table,
  Icon,
  Image,
} from 'semantic-ui-react';
import config from '@plone/volto/registry';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import LogoCMCBranca from '../../../../../../theme/assets/images/logo-cmc-branca-800600.png';
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
            <div className="row">
              <div id="portal-colophon">
                <p style={{ textAlign: 'center' }}>
                  <strong>
                    <Image
                      src={LogoCMCBranca}
                      alt="Logo CMC branca - 800600.png"
                      title="Logo CMC branca - 800600.png"
                      width={300}
                      height={150}
                    />
                  </strong>
                </p>
              </div>
            </div>

            <p style={{ textAlign: 'center' }}>
              <strong>
                AQUI SE CONSTRÓI O FUTURO DA CIDADE&nbsp; &nbsp;|&nbsp;
                &nbsp;18ª LEGISLATURA (2021-2024)
              </strong>
            </p>

            <p style={{ textAlign: 'right' }}>
              <strong>
                <a
                  className="external-link"
                  href="http://https//pm3.cmc.pr.gov.br/"
                  target="_self"
                  title=""
                >
                  &nbsp;
                </a>
              </strong>
            </p>

            <div className="row">
              <div id="portal-colophon">
                <div className="colophon-item">
                  <a
                    className="colophon-logo interlegis"
                    href="http://www.interlegis.leg.br/"
                  >
                    <img
                      alt="Logotipo do Interlegis"
                      src="https://www.curitiba.pr.leg.br/++resource++portalmodelo.theme/images/interlegis-white.png"
                    />
                  </a>
                  <div className="colophon-info">
                    Este site é feito com o software livre e aberto{' '}
                    <a href="http://www.interlegis.leg.br/portalmodelo">
                      Portal Modelo
                    </a>{' '}
                    desenvolvido pelo{' '}
                    <a href="http://www.interlegis.leg.br">Interlegis</a> e roda
                    sobre o CMS <a href="http://plone.org">Plone</a>.
                  </div>
                </div>

                <div className="colophon-item">
                  <a
                    className="colophon-logo creative-commons"
                    href="http://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR"
                  >
                    <img
                      alt="Selo Creative Commons BY-SA"
                      src="https://www.curitiba.pr.leg.br/++resource++portalmodelo.theme/images/cc-by-sa-white.png"
                    />
                  </a>
                  <div className="colophon-info">
                    Os conteúdos e dados deste site estão publicados sob a
                    licença{' '}
                    <a href="http://creativecommons.org/licenses/by-sa/4.0/deed.pt_BR">
                      Creative Commons 4.0 — Atribuir Fonte - Compartilhar
                      Igual.
                    </a>
                  </div>
                </div>
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
