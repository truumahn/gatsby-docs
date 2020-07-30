import styled from 'styled-components';

const getTypeColor = (type, theme) => {
  switch (type) {
    case 'error':
      return theme.errorColor;
    case 'warn':
      return theme.warnColor;
    case 'success':
      return theme.successColor;
    default:
      return theme.infoColor;
  }
};

export const StyledNotice = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  position: relative;
  padding: 1rem;
  border-left: 6px solid
    ${({ type, theme }) => {
      return getTypeColor(type, theme);
    }};
  color: ${({ type, theme }) => {
    return getTypeColor(type, theme);
  }};

  &:before {
    z-index: -1;
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.1;
    background-color: ${({ type, theme }) => {
      return getTypeColor(type, theme);
    }};
  }

  > * {
    &:first-child {
      margin-top: 0;
    }

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
