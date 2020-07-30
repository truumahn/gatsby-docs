import styled, { keyframes } from 'styled-components';
import { md } from '../../../styles/mediaQueries';

export const StyledPre = styled.pre`
  position: relative;

  > button {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
  }

  @media ${md} {
    > button {
      right: 10000000px;
    }

    &:hover {
      > button {
        right: 0.5rem;
      }
    }
  }
`;

const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const StyledCopiedMessage = styled.div`
  background-color: ${({ theme }) => {
    return theme.sidebarBackgroundColor;
  }};
  animation: ${fadeOut} 2s ease-in;
  transform: translateX(-50%);
  text-transform: uppercase;
  padding: 1rem;
  position: fixed;
  bottom: 25%;
  left: 50%;
  z-index: 6;
  box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.2);
`;
