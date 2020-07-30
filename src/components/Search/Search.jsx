import React, { useState, useContext } from 'react';
import Fuse from 'fuse.js';
import PropTypes from 'prop-types';
import { SearchDataContext } from '../../context/SearchDataProvider';
import Results from './Results';
import { StyledSearchWrapper, StyledSearchInput } from './Search.style';

const Search = ({ className = null }) => {
  const [results, setResults] = useState(0);
  const [searchInput, setSearchInput] = useState(0);
  const { index } = useContext(SearchDataContext);

  const options = {
    includeMatches: true,
    keys: ['title', 'excerpt'],
    threshold: 0.3,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
  };

  const fuse = new Fuse(index, options);

  if (index.length > 0) {
    fuse.setCollection(index);
  }

  const handleChange = ({ currentTarget }) => {
    setSearchInput(currentTarget.value);
    setResults(fuse.search(currentTarget.value, { limit: 8 }));
  };

  return (
    <StyledSearchWrapper className={className}>
      <StyledSearchInput placeholder="Search" onChange={handleChange} />
      {index && Array.isArray(results) && results.length > 0 && <Results results={results} searchInput={searchInput} />}
    </StyledSearchWrapper>
  );
};

Search.propTypes = {
  className: PropTypes.string,
};

export default Search;
