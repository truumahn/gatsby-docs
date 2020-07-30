import styled from 'styled-components';

export const List = styled.ul`
  padding: 0;
  padding-left: 1rem;

  & > li > & {
    padding-left: 1.5rem;
  }
`;
