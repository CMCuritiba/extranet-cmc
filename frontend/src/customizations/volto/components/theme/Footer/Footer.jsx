<<<<<<< HEAD
// SemanticUI-free pre-@plone/components
import React from 'react';

import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import { useSelector, shallowEqual } from 'react-redux';
import { UniversalLink, Logo } from '@plone/volto/components';
import Container from '@kitconcept/volto-light-theme/components/Atoms/Container/Container';
import { flattenToAppURL, addAppURL } from '@plone/volto/helpers';
import config from '@plone/volto/registry';
import { Image } from 'semantic-ui-react';
import LogoPreta from './logo-cmc-preta.png';
=======
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
>>>>>>> e1dab84 (Rodapé customizado da Extranet)

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
  const { settings } = config;
  const { lang, siteActions = [] } = useSelector(
    (state) => ({
      lang: state.intl.locale,
      siteActions: state.actions?.actions?.site_actions,
    }),
    shallowEqual,
  );
  return (
    <footer id="footer">
      <Container layout className="footer">
        <div className="footer-message">
          <div align="center">
            <Image src={LogoPreta} />
          </div>
          <FormattedMessage
            id="AQUI SE CONSTRÓI O FUTURO DA CIDADE   |   18ª LEGISLATURA (2021-2024)"
            defaultMessage="AQUI SE CONSTRÓI O FUTURO DA CIDADE   |   18ª LEGISLATURA (2021-2024)"
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
          />{' '}
          <br />
          <FormattedMessage
            id="Distributed under the {license}."
            defaultMessage="Distributed under the {license}."
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
        </div>
        <ul>
          {/* wrap in div for a11y reasons: listitem role cannot be on the <a> element directly */}
          {siteActions?.length
            ? siteActions.map((item) => (
                <li className="item" key={item.id}>
                  <UniversalLink
                    className="item"
                    href={
                      settings.isMultilingual
                        ? `/${lang}/${
                            item.url
                              ? flattenToAppURL(item.url)
                              : addAppURL(item.id)
                          }`
                        : item.url
                        ? flattenToAppURL(item.url)
                        : addAppURL(item.id)
                    }
                  >
                    {item?.title}
                  </UniversalLink>
                </li>
              ))
            : null}
        </ul>
        <div className="logo">
          <Logo />
        </div>
        <a className="item powered-by" href="https://plone.org">
          <FormattedMessage
            id="Powered by Plone & Python"
            defaultMessage="Powered by Plone & Python"
          />
        </a>
        <br />
        <div className="footer-branding">
          Made with{' '}
          <span role="img" aria-label="love" style={{ color: 'red' }}>
            ❤️
          </span>{' '}
          by kitconcept
        </div>
      </Container>
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
