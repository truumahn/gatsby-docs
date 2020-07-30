/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Link as GatsbyLink } from 'gatsby';

const isActive = (className, inActiveTrail) => {
  return ({ isCurrent }) => {
    const activeClassName = { className: `${className} is-active` };

    if (isCurrent || inActiveTrail) {
      return activeClassName;
    }

    return { className };
  };
};

const Link = ({ className = null, children = null, inActiveTrail = false, ...props }) => {
  return (
    <GatsbyLink className={className} getProps={isActive(className, inActiveTrail)} {...props}>
      {children}
    </GatsbyLink>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  inActiveTrail: PropTypes.bool,
  to: PropTypes.string,
};

export default Link;
