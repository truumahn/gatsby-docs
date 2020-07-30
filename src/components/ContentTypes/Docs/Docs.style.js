import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { sm, smMax, md } from '../../../styles/mediaQueries';
import Search from '../../Search/Search';
import { Toc } from '../../Navigation';
import { asideWidth, headerHeight, contentMaxWidth } from '../../../styles/variables';

const tocWidth = '256px';
const contentWidth = `${parseInt(contentMaxWidth, 10) - parseInt(tocWidth, 10)}px`;

export const StyledBody = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;

    .anchor {
      position: absolute;
      right: 100000px;
      margin-left: 0.5rem;

      svg {
        display: inline-block;
        fill: ${({ theme }) => {
          return theme.anchorColor;
        }};
      }

      &:hover {
        svg {
          stroke: none;
          fill: ${({ theme }) => {
            return theme.anchorActiveColor;
          }};
        }
      }
    }

    &:hover {
      .anchor {
        right: initial;
      }
    }
  }

  @media ${sm} {
    order: 1;
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
    max-width: ${contentWidth};
    padding-right: 1rem;
    flex-shrink: 1;
    min-width: 0;
  }
`;

export const StyledToc = styled(Toc)`
  @media ${sm} {
    max-height: calc(100vh - ${headerHeight} - 1rem);
    overflow-y: auto;
    order: 2;
    flex-grow: 1;
    flex-basis: 0;
    flex-shrink: 0;
    position: sticky;
    top: ${headerHeight};
    max-width: ${tocWidth};
  }
`;

export const StyledLogoLink = styled(Link)`
  max-width: ${asideWidth};
  display: inline-flex;
  align-items: center;
`;

export const SiteTitle = styled.strong`
  display: none;
  padding-left: 1rem;
  padding-right: 1rem;

  @media ${sm} {
    display: initial;
  }
`;

export const StyledSearch = styled(Search)`
  display: none;

  ${({ searchOpen }) => {
    return (
      searchOpen &&
      css`
        display: block;
        position: absolute;
        z-index: 3;
        left: 0;
        right: 0;
        top: 100%;
        margin: 0;

        input {
          width: 100%;
        }
      `
    );
  }}

  @media ${sm} {
    display: block;
    margin-left: auto;
  }
`;

export const StyledMain = styled.main`
  padding-top: ${headerHeight};

  @media ${md} {
    padding-left: ${asideWidth};
  }
`;

export const StyledAside = styled.aside`
  background-color: ${({ theme }) => {
    return theme.sidebarBackgroundColor;
  }};
  padding: 1rem;
  max-height: calc(100vh - ${headerHeight});
  overflow-y: auto;

  @media ${smMax} {
    position: fixed;
    z-index: 2;
    transition: transform ease-in 0.2s;
    transform: translateX(
      ${({ asideOpen }) => {
        return asideOpen ? '0%' : '-100%';
      }}
    );
    top: ${headerHeight};
    left: 0;
    right: 0;
    bottom: 0;
  }

  @media ${md} {
    width: ${asideWidth};
    position: fixed;
    left: 0;
    height: 100%;
    border-right: 1px solid
      ${({ theme }) => {
        return theme.sidebarBorderColor;
      }};
  }
`;

export const LogoDiv = styled.div`
  margin: 0;
  display: flex;
  align-items: center;

  @media ${md} {
    width: calc(${asideWidth} - 1rem);
  }
`;
