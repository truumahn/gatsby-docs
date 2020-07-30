import { createGlobalStyle } from 'styled-components';
import { bodyLineHeight } from './variables';

export const GlobalStyle = createGlobalStyle`
  body {
    line-height: ${bodyLineHeight};
    word-wrap: break-word;
    background-color: ${({ theme }) => {
      return theme.bodyBackgroundColor;
    }};
    color: ${({ theme }) => {
      return theme.bodyTextColor;
    }};
  }

  h1,
  h2,
  h3 {
    color: ${({ theme }) => {
      return theme.bodyTextEmphColor;
    }};
  }

  button {
    &.is-active,
    &:hover {
      svg {
        stroke: ${({ theme }) => {
          return theme.anchorActiveColor;
        }};
      }
    }
  }

  a {
    color: ${({ theme }) => {
      return theme.anchorColor;
    }};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    &.is-active,
    &:hover {
      color: ${({ theme }) => {
        return theme.anchorActiveColor;
      }};

      svg {
        stroke: ${({ theme }) => {
          return theme.anchorActiveColor;
        }};
      }
    }
  }

  blockquote {
    border-left: 3px solid ${({ theme }) => {
      return theme.bodyTextEmphColor;
    }};
    color: ${({ theme }) => {
      return theme.bodyTextEmphColor;
    }};
  }

  mark {
    background-color: ${({ theme }) => {
      return theme.buttonActiveBackgroundColor;
    }};
    color: ${({ theme }) => {
      return theme.buttonActiveTextColor;
    }};
  }

  img {
    border: 1px solid ${({ theme }) => {
      return theme.bodyTextColor;
    }};
  }

  caption {
    background-color: ${({ theme }) => {
      return theme.bodyTextColor;
    }};
  }

  table {
    background-color: ${({ theme }) => {
      return theme.sidebarBackgroundColor;
    }};
  }

  th {
    color: ${({ theme }) => {
      return theme.bodyTextEmphColor;
    }};
  }

  th,
  td {
    border-color: ${({ theme }) => {
      return theme.headerBackgroundColor;
    }};
  }

  hr {
    color: ${({ theme }) => {
      return theme.bodyTextEmphColor;
    }};
  }
`;
