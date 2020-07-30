import styled from 'styled-components';
import Link from '../Routing/Link';
import { sm, md } from '../../styles/mediaQueries';

export const StyledSearchWrapper = styled.div`
  position: relative;
  z-index: 2;
`;

export const StyledResults = styled.div`
  display: ${({ visible }) => {
    return visible ? 'block' : 'none';
  }};
  position: absolute;
  z-index: 3;
  overflow-y: scroll;
  border: 1px solid
    ${({ theme }) => {
      return theme.sidebarBorderColor;
    }};
  background-color: ${({ theme }) => {
    return theme.bodyBackgroundColor;
  }};
  box-shadow: 0 4px 12px 0px rgba(0, 0, 0, 0.2);
  top: 100%;
  height: 50vh;
  right: 0;
  left: 0;

  @media ${sm} {
    width: 66vw;
    left: 50%;
    transform: translatex(-50%);
    max-height: 66vh;
    height: auto;
    right: initial;
  }

  @media ${md} {
    position: absolute;
    transform: none;
    right: 0;
    left: initial;
  }
`;

export const StyledResult = styled(Link)`
  display: flex;
  padding: 0.5rem;

  & ~ & {
    border-top: 1px solid
      ${({ theme }) => {
        return theme.sidebarBorderColor;
      }};
  }

  &:hover,
  &:focus {
    background-color: ${({ theme }) => {
      return theme.sidebarBackgroundColor;
    }};
  }
`;

export const StyledResultTitle = styled.div`
  flex-grow: 0;
  flex-basis: 30%;
  padding: 0.5rem;
`;

export const StyledResultExcerpt = styled.div`
  flex-grow: 0;
  flex-basis: 70%;
  padding: 0.5rem;

  &:not(:last-child) {
    padding-bottom: 0.5rem;
  }
`;

export const StyledSearchInput = styled.input`
  padding: 0.5rem;
  border-radius: 0;
  border: 1px solid
    ${({ theme }) => {
      return theme.sidebarBorderColor;
    }};
`;
