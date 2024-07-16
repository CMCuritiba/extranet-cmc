// SemanticUI-free pre-@plone/components
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Container from '@kitconcept/volto-light-theme/components/Atoms/Container/Container';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import {
  Anontools,
  LanguageSelector,
  Logo,
  Navigation,
  SearchWidget,
} from '@plone/volto/components';

const Header = (props) => {
  const { pathname } = props;
  const token = useSelector((state) => state.userSession.token);

  return (
    <header className="header-wrapper">
      <Container layout>
        <div className="header">
          <div className="logo-nav-wrapper">
            <div className="logo" style={{ display: 'grid' }}>
              <div
                style={{
                  justifySelf: 'center',
                }}
              >
                <Logo />
              </div>
            </div>
            <Navigation pathname={pathname} />
            <div>
              <h2>Extranet</h2>
            </div>
            <div className="search-wrapper">
              <div className="search">
                <SearchWidget />
              </div>
            </div>
          </div>
          <div className="tools-wrapper">
            <LanguageSelector />

            <div className="tools">
              {!token && <Anontools />}

              <Link aria-label="sitemap" to="/sitemap">
                <FormattedMessage id="Sitemap" defaultMessage="Sitemap" />
              </Link>
              <a href="https://github.com/kitconcept/volto-light-theme">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

Header.propTypes = {
  token: PropTypes.string,
  pathname: PropTypes.string.isRequired,
};

Header.defaultProps = {
  token: null,
};

export default Header;
