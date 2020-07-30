import styled from 'styled-components';
import { md } from '../../../styles/mediaQueries';

export const StyledNav = styled.nav`
  @media ${md} {
    > * {
      + * {
        margin-left: 1.5rem;
      }
    }
  }
`;
