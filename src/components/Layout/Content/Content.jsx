import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection } from './Content.style';

const Content = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
