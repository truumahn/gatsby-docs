import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Sun, Moon, List, Search, MessageCircle } from 'react-feather';
import { StyledIconButton, StyledMobileButton } from './Toggle.style';

const togglePropTypes = {
  clickHandler: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export const ToggleTheme = ({ clickHandler, children = null }) => {
  const { themeName, anchorColor } = useContext(ThemeContext);
  return (
    <StyledIconButton
      title={themeName === 'light' ? 'Switch to Dark mode' : 'Switch to Light mode'}
      type="button"
      onClick={clickHandler}
    >
      {themeName === 'light' ? <Moon color={anchorColor} /> : <Sun color={anchorColor} />}
      {children}
    </StyledIconButton>
  );
};

ToggleTheme.propTypes = togglePropTypes;

export const ToggleMobileMenu = ({ clickHandler, children = null }) => {
  const { anchorColor } = useContext(ThemeContext);
  return (
    <StyledMobileButton type="button" onClick={clickHandler}>
      <List color={anchorColor} />
      {children}
    </StyledMobileButton>
  );
};

ToggleMobileMenu.propTypes = togglePropTypes;

export const ToggleSearch = ({ clickHandler, children = null }) => {
  const { anchorColor } = useContext(ThemeContext);
  return (
    <StyledMobileButton type="button" onClick={clickHandler}>
      <Search color={anchorColor} />
      {children}
    </StyledMobileButton>
  );
};

ToggleSearch.propTypes = togglePropTypes;
