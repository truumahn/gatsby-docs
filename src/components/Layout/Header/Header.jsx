import React from 'react';
import PropTypes from 'prop-types';
import { StyledHeader, StyledHeaderItem } from './Header.style';

const Header = ({ left = null, right = null }) => {
  return (
    <StyledHeader>
      <StyledHeaderItem>{left}</StyledHeaderItem>
      <StyledHeaderItem>{right}</StyledHeaderItem>
    </StyledHeader>
  );
};

Header.propTypes = {
  left: PropTypes.node,
  right: PropTypes.node,
};

export default Header;
