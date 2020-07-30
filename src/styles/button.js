import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 20px 10px;
  color: ${({ theme }) => {
    return theme.buttonTextColor;
  }};
  line-height: 1;
  display: inline-flex;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => {
    return theme.buttonBackgroundColor;
  }};

  &:hover {
    text-decoration: none;
    color: ${({ theme }) => {
      return theme.buttonActiveTextColor;
    }};
    background-color: ${({ theme }) => {
      return theme.buttonActiveBackgroundColor;
    }};
    svg {
      stroke: ${({ theme }) => {
        return theme.anchorActiveColor;
      }};
    }
  }
`;
