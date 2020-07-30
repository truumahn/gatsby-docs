import React from 'react';
import Highlighter from 'react-highlight-words';
import PropTypes from 'prop-types';
import { StyledResults, StyledResult, StyledResultTitle, StyledResultExcerpt } from './Search.style';

const Results = ({ results, searchInput = null }) => {
  const searchWords = searchInput.split(/\s/);
  return (
    <StyledResults visible={results.length > 0}>
      {results.map(({ item, matches }) => {
        const titleMatch = matches.filter((match) => {
          return match.key === 'title';
        });
        const excerptMatches = matches.filter((match) => {
          return match.key === 'excerpt';
        });
        return (
          <StyledResult key={item.id} to={item.slug}>
            <StyledResultTitle>
              {titleMatch.length > 0 ? (
                <Highlighter searchWords={searchWords} textToHighlight={titleMatch[0].value} />
              ) : (
                item.title
              )}
            </StyledResultTitle>
            <StyledResultExcerpt>
              {excerptMatches.length > 0 ? (
                <Highlighter searchWords={searchWords} textToHighlight={excerptMatches[0].value} />
              ) : (
                item.excerpt[0]
              )}
            </StyledResultExcerpt>
          </StyledResult>
        );
      })}
    </StyledResults>
  );
};

Results.propTypes = {
  searchInput: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object),
};

export default Results;
