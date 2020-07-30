import styled from 'styled-components';
import { contentMaxWidth } from '../../../styles/variables';
import { sm } from '../../../styles/mediaQueries';

export const StyledSection = styled.section`
  max-width: ${contentMaxWidth};
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 1;

  @media ${sm} {
    display: flex;
    align-items: flex-start;
  }
`;
