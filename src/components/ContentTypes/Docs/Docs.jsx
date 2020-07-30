import React, { useState, useContext, useEffect } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import OutsideClickHandler from 'react-outside-click-handler';
import { Home } from 'react-feather';
import { Header, Content } from '../../Layout';
import EditLink from '../../Edit/EditLink';
import { ToggleTheme, ToggleMobileMenu, ToggleSearch } from '../../Toggle/Toggle';
import SEO from '../../SEO/SEO';
import { pageType, locationType } from '../../../types';
import { Sidebar, MainNavigation, Breadcrumbs } from '../../Navigation';
import { LogoDiv, SiteTitle, StyledMain, StyledAside, StyledBody, StyledToc, StyledSearch } from './Docs.style';

const Docs = ({
  page: { siteTitle, githubLink, title, toc, timeToRead, slug, modifiedTime, modifiedTimeRelative },
  location,
  children,
}) => {
  const [currentUrl, setCurrentUrl] = useState('');
  const [asideOpen, setAsideOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { anchorColor } = useContext(ThemeContext);

  const toggleTheme = () => {
    const currentTheme = localStorage.getItem('theme');
    if (localStorage !== undefined) {
      localStorage.setItem('theme', currentTheme === 'light' ? 'dark' : 'light');
      window.location.reload();
    }
  };
  const toggleSidebar = () => {
    setAsideOpen(!asideOpen);
  };
  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  useEffect(() => {
    setCurrentUrl(location.href);
  }, [currentUrl]);

  return (
    <>
      <SEO title={title} />
      <Header
        left={
          <>
            <ToggleMobileMenu clickHandler={toggleSidebar} />
            <LogoDiv>
              <Link to="/">
                <Home color={anchorColor} />
              </Link>
              <Link to="/">
                <SiteTitle>{siteTitle}</SiteTitle>
              </Link>
            </LogoDiv>
            <MainNavigation />
          </>
        }
        right={
          <>
            <OutsideClickHandler
              onOutsideClick={() => {
                setSearchOpen(false);
              }}
            >
              <StyledSearch searchOpen={searchOpen} />
              <ToggleSearch clickHandler={toggleSearch} />
            </OutsideClickHandler>
            <ToggleTheme title="Toggle theme" clickHandler={toggleTheme} />
            <EditLink title="Edit on GitHub" slug={slug} githubLink={githubLink} />
          </>
        }
      />
      <StyledMain>
        {location.pathname !== '/' && (
          <StyledAside asideOpen={asideOpen}>
            <Sidebar />
          </StyledAside>
        )}
        <Content>
          {toc && toc.length > 0 && <StyledToc toc={toc} maxDepth={2} location={location} />}
          <StyledBody>
            <Breadcrumbs />
            <p>
              <small>
                <strong>Modified at:</strong> {modifiedTime} - {modifiedTimeRelative}
              </small>
            </p>
            <p>
              <small>
                <strong>Read time:</strong> {timeToRead} min
              </small>
            </p>
            <h1>{title}</h1>
            {children}
          </StyledBody>
        </Content>
      </StyledMain>
    </>
  );
};

Docs.propTypes = {
  page: pageType.isRequired,
  children: PropTypes.node,
  location: locationType.isRequired,
};

Docs.defaultProps = {
  children: null,
};

export default Docs;
