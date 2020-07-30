import React from 'react';
import PropTypes from 'prop-types';
import { StyledNotice } from './Notice.style';

const Notice = ({ children = null, type = 'info' }) => {
  return <StyledNotice type={type}>{children}</StyledNotice>;
};

Notice.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(['error', 'warn', 'success', 'info']),
};

export default Notice;
