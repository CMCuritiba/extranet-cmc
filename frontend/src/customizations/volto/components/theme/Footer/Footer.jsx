/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, List, Segment } from 'semantic-ui-react';
import { map } from 'lodash';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';

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
  const { siteActions = [] } = useSelector(
    (state) => ({
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );

  return (
    <Segment
      role="contentinfo"
      vertical
      padded
      inverted
      color="grey"
      textAlign="center"
      id="footer"
      aria-label="Footer"
    >
      <Container>
        <Segment basic inverted color="grey" className="discreet">
          <FormattedMessage
            id="Este legislativo municipal oferece através de seu site uma visão geral dos trabalhos realizados em prol da cidade de Curitiba. Acompanhe nesta ferramenta o trabalho dos vereadores, a execução do orçamento, e tenha acesso a diversas informações institucionais e de funcionamento. Nosso objetivo maior é o de dar transparência aos trabalhos aqui realizados. Lembramos que este site está em constante atualização e melhoria. Sua visita frequente é muito importante."
            defaultMessage="Este legislativo municipal oferece através de seu site uma visão geral dos trabalhos realizados em prol da cidade de Curitiba. Acompanhe nesta ferramenta o trabalho dos vereadores, a execução do orçamento, e tenha acesso a diversas informações institucionais e de funcionamento. Nosso objetivo maior é o de dar transparência aos trabalhos aqui realizados. Lembramos que este site está em constante atualização e melhoria. Sua visita frequente é muito importante."
            values={{
              plonecms: (
                <FormattedMessage
                  id="Plone{reg} Open Source CMS/WCM"
                  defaultMessage="Plone{reg} Open Source CMS/WCM"
                  values={{ reg: <sup>®</sup> }}
                />
              ),
              copyright: (
                <abbr title={intl.formatMessage(messages.copyright)}>©</abbr>
              ),
              current_year: new Date().getFullYear(),
              plonefoundation: (
                <a className="item" href="http://plone.org/foundation">
                  <FormattedMessage
                    id="Plone Foundation"
                    defaultMessage="Plone Foundation"
                  />
                </a>
              ),
            }}
          />{''}<div></div>
          <FormattedMessage
            id="1997 - 2024 - Câmara Municipal de Curitiba - todos os direitos reservados"
            defaultMessage="1997 - 2024 - Câmara Municipal de Curitiba - todos os direitos reservados"
            values={{
              license: ( 
                <a
                  className="item"
                  href="http://creativecommons.org/licenses/GPL/2.0/"
                >
                  <FormattedMessage
                    id="GNU GPL license"
                    defaultMessage="GNU GPL license"
                  />
                </a>
              ),
            }}
          />
        </Segment>
        <List horizontal inverted>
          {siteActions?.length
            ? map(siteActions, (item) => (
                <div role="listitem" className="item" key={item.id}>

                </div>
              ))
            : null}
          <div role="listitem" className="item">
            <a className="item" href="https://extranet-poc.cmc.pr.gov.br/">
              <FormattedMessage
                id="Câmara Municipal de Curitiba - Rua Barão do Rio Branco, 720 - Curitiba - Paraná - Brasil - CEP: 80010-902"
                defaultMessage="Câmara Municipal de Curitiba - Rua Barão do Rio Branco, 720 - Curitiba - Paraná - Brasil - CEP: 80010-902"
              />
            </a>
          </div>
        </List>
      </Container>
    </Segment>
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
