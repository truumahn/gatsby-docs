/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import styled from 'styled-components';

const TableWrapper = styled.div`
  overflow-x: auto;
`;

export default (props) => {
  return (
    <TableWrapper>
      <table {...props} />
    </TableWrapper>
  );
};
