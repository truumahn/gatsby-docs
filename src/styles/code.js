import { createGlobalStyle } from 'styled-components';

const base03 = '#002b36';
const base02 = '#073642';
const base01 = '#586e75';
const base00 = '#657b83';
const base0 = '#839496';
const base1 = '#93a1a1';
const base2 = '#eee8d5';
const base3 = '#fdf6e3';
const yellow = '#b58900';
const orange = '#cb4b16';
// const red = '#dc322f';
// const magenta = '#d33682';
// const violet = '#6c71c4';
const blue = '#268bd2';
const cyan = '#2aa198';
const green = '#859900';

export const LightCode = createGlobalStyle`
  code[class*="language-"],
  pre[class*="language-"] {
    color: ${base00};

    &::-moz-selection,
    ::-moz-selection {
      background: ${base02};
    }

    &::selection,
    ::selection {
      background: ${base02};
    }
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background-color: ${base3};
  }

  .token {
    &.comment,
    &.prolog,
    &.doctype,
    &.cdata {
      color: ${base1};
    }

    &.punctuation {
      color: ${base01};
    }

    &.property,
    &.tag,
    &.boolean,
    &.number,
    &.constant,
    &.symbol,
    &.deleted {
      color: ${blue};
    }

    &.selector,
    &.attr-name,
    &.string,
    &.char,
    &.builtin,
    &.url,
    &.inserted {
      color: ${cyan};
    }

    &.entity {
      color: ${base00};
      background: ${base2};
    }

    &.atrule,
    &.attr-value,
    &.keyword {
      color: ${green};
    }

    &.function,
    &.class-name {
      color: ${yellow};
    }
    
    &.regex,
    &.important,
    &.variable {
      color: ${orange};
    }
  }
`;

// @see https://github.com/PrismJS/prism-themes/blob/master/themes/prism-duotone-dark.css
export const DarkCode = createGlobalStyle`
  code[class*="language-"],
  pre[class*="language-"] {
    color: ${base0};

    &::-moz-selection,
    ::-moz-selection {
      background: ${base2};
    }

    &::selection,
    ::selection {
      background: ${base2};
    }
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background-color: ${base03};
  }

  .token {
    &.comment,
    &.prolog,
    &.doctype,
    &.cdata {
      color: ${base01};
    }

    &.punctuation {
      color: ${base1};
    }

    &.property,
    &.tag,
    &.boolean,
    &.number,
    &.constant,
    &.symbol,
    &.deleted {
      color: ${blue};
    }

    &.selector,
    &.attr-name,
    &.string,
    &.char,
    &.builtin,
    &.url,
    &.inserted {
      color: ${cyan};
    }

    &.entity {
      color: ${base0};
      background: ${base02};
    }

    &.atrule,
    &.attr-value,
    &.keyword {
      color: ${green};
    }

    &.function,
    &.class-name {
      color: ${yellow};
    }
    
    &.regex,
    &.important,
    &.variable {
      color: ${orange};
    }
  }
`;
