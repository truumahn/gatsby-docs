import styled from 'styled-components';
import { md } from '../../styles/mediaQueries';

export const StyledIconButton = styled.button`
  background-color: transparent;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const StyledMobileButton = styled(StyledIconButton)`
  @media ${md} {
    display: none;
  }
`;
