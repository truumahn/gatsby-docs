import React from 'react';
import PropTypes from 'prop-types';
import useActiveHash from '../../../hooks/use-active-hash';
import { StyledAnchorLink } from './Toc.style';
import { tocType, locationType } from '../../../types';

const Toc = ({ className, navHeight, toc, maxDepth, location }) => {
  const getHeadingIds = (items = toc, recursionDepth = 1) => {
    const idList = [];
    const hashToId = (str) => {
      return str.slice(1);
    };
    if (items) {
      items.forEach((item) => {
        if (item.url) {
          idList.push(hashToId(item.url));
        }

        if (item.items && recursionDepth < maxDepth) {
          idList.push(...getHeadingIds(item.items, recursionDepth + 1));
        }
      });
    }
    return idList;
  };

  const createItems = (activeHash, items = toc, currentDepth = 1) => {
    return (
      items &&
      items.map((item, index) => {
        const isActive = item.url === `#${activeHash}`;
        return (
          <li key={item.url || `${currentDepth}-${index}`}>
            {item.url && (
              <StyledAnchorLink
                className={isActive ? 'is-active' : null}
                isActive={isActive}
                to={`${location.pathname}${item.url}`}
              >
                {item.title}
              </StyledAnchorLink>
            )}
            {item.items && currentDepth < maxDepth && <ul>{createItems(activeHash, item.items, currentDepth + 1)}</ul>}
          </li>
        );
      })
    );
  };

  const activeHash = useActiveHash(getHeadingIds(), `-${navHeight} 0% -70% 0%`);

  return (
    <nav className={className}>
      <h2>Table of Contents</h2>
      <ul>{createItems(activeHash)}</ul>
    </nav>
  );
};

Toc.propTypes = {
  className: PropTypes.string,
  toc: tocType.isRequired,
  maxDepth: PropTypes.number,
  location: locationType.isRequired,
  navHeight: PropTypes.string,
};

Toc.defaultProps = {
  maxDepth: 6,
  navHeight: '0px',
  className: null,
};

export default Toc;
