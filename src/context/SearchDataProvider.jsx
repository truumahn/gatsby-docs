import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

export const SearchDataContext = React.createContext();

const SearchDataProvider = ({ children = null }) => {
  const [searchableData, setSearchableData] = useState([]);

  useEffect(() => {
    axios.get(`${window.location.origin}/docs-index.json`).then((response) => {
      if (Array.isArray(response.data)) {
        setSearchableData(response.data);
      }
    });
  }, []);

  return <SearchDataContext.Provider value={{ index: searchableData }}>{children}</SearchDataContext.Provider>;
};

SearchDataProvider.propTypes = {
  children: PropTypes.node,
};

export default SearchDataProvider;
