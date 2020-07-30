import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ChevronRight } from 'react-feather';
import Link from '../../Routing/Link';
import { NavigationDataContext } from '../../../context/NavigationDataProvider';
import { StyledNav } from './Breadcrumbs.style';

const Breadcrumbs = ({ className = null }) => {
  const { activeTrail } = useContext(NavigationDataContext);
  return (
    <StyledNav className={className}>
      <Link to="/">Home</Link>
      {activeTrail &&
        activeTrail.map((item) => {
          return (
            <React.Fragment key={item.link || item.title}>
              <ChevronRight />
              {item.link ? (
                <Link key={item.link} to={item.link}>
                  {item.title}
                </Link>
              ) : (
                <span key={item.title}>{item.title}</span>
              )}
            </React.Fragment>
          );
        })}
    </StyledNav>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
};

export default Breadcrumbs;
