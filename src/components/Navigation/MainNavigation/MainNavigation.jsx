import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Link from '../../Routing/Link';
import { NavigationDataContext } from '../../../context/NavigationDataProvider';
import { StyledNav } from './MainNavigation.style';

const MainNavigation = ({ className = null }) => {
  const { mainNavigation, activeTrail } = useContext(NavigationDataContext);
  return (
    <StyledNav className={className}>
      {mainNavigation.map((item) => {
        return (
          <Link key={item.link} inActiveTrail={activeTrail && item.link === activeTrail[0].link} to={item.link}>
            {item.title}
          </Link>
        );
      })}
    </StyledNav>
  );
};

MainNavigation.propTypes = {
  className: PropTypes.string,
};

export default MainNavigation;
