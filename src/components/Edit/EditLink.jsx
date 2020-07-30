import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Edit3 } from 'react-feather';

const createEditLink = (slug, githubLink) => {
  const path = slug === '/' ? '/index.md' : slug.replace(/\/$/, '.md');
  return `${githubLink}/edit/master/docs${path}`;
};

const EditLink = ({ slug, githubLink }) => {
  const { anchorColor } = useContext(ThemeContext);
  return (
    <a title="Edit on GitHub" target="_blank" rel="noreferrer" href={createEditLink(slug, githubLink)}>
      <Edit3 color={anchorColor} />
    </a>
  );
};

EditLink.propTypes = {
  slug: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired,
};

export default EditLink;
