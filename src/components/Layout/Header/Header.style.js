import styled from 'styled-components';
import { headerHeight } from '../../../styles/variables';
import { xsMax, sm } from '../../../styles/mediaQueries';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => {
    return theme.headerBackgroundColor;
  }};
  border-bottom: 1px solid
    ${({ theme }) => {
      return theme.headerBorderColor;
    }};
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100%;
  height: ${headerHeight};

  @media ${sm} {
    padding: 1rem;
  }
`;

export const StyledHeaderItem = styled.div`
  display: flex;
  align-items: center;

  @media ${xsMax} {
    > a,
    button {
      padding: 1rem;
    }
  }

  @media ${sm} {
    > * {
      + * {
        margin-left: 1rem;
      }
    }
  }

  svg {
    display: block;
  }
`;
