import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import { GlobalStyle } from '../styles/style';
import { LightCode, DarkCode } from '../styles/code';

const ThemeProvider = ({ children = null }) => {
  const [theme, setTheme] = useState('light');
  const getTheme = () => {
    switch (theme) {
      case 'light':
        return lightTheme;
      case 'dark':
        return darkTheme;
      default:
        return lightTheme;
    }
  };

  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <StyledThemeProvider theme={getTheme()}>
      <GlobalStyle />
      {theme === 'light' ? <LightCode /> : <DarkCode />}
      {children}
    </StyledThemeProvider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default ThemeProvider;
