/* eslint-disable react/jsx-filename-extension */
/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import './src/styles/style.scss';
import './src/styles/code.scss';
import React from 'react';
import ThemeProvider from './src/context/ThemeProvider';
import SearchDataProvider from './src/context/SearchDataProvider';
import NavigationDataProvider from './src/context/NavigationDataProvider';

export const wrapPageElement = ({ element, props }) => {
  return (
    <NavigationDataProvider currentSlug={props.pageContext.slug}>
      <ThemeProvider>
        <SearchDataProvider>{element}</SearchDataProvider>
      </ThemeProvider>
    </NavigationDataProvider>
  );
};
