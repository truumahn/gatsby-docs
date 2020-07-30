/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useContext, useRef } from 'react';
import { ThemeContext } from 'styled-components';
import CopyToClipboard from 'react-copy-to-clipboard';
import { Copy } from 'react-feather';
import { StyledPre, StyledCopiedMessage } from './CodeBlock.style';

const CodeBlock = (props) => {
  const [textToCopy, setTextToCopy] = useState(null);
  const [copied, setCopied] = useState(false);
  const codeRef = useRef(null);
  const { anchorColor } = useContext(ThemeContext);

  const handleCopy = () => {
    setCopied(true);
    setInterval(() => {
      return setCopied(false);
    }, 2000);
  };

  useEffect(() => {
    if (codeRef.current) {
      setTextToCopy(codeRef.current.innerText);
    }
  }, []);
  return (
    <StyledPre ref={codeRef} {...props}>
      {textToCopy ? (
        <CopyToClipboard onCopy={handleCopy} text={textToCopy}>
          <button type="button">
            <Copy color={anchorColor} />
          </button>
        </CopyToClipboard>
      ) : null}
      {copied ? <StyledCopiedMessage copied={copied}>Copied to clipboard</StyledCopiedMessage> : null}
      {props.children}
    </StyledPre>
  );
};

CodeBlock.propTypes = {};

export default CodeBlock;
