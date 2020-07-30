module.exports = (str, chunkSize) => {
  const splitText = [];

  if (str.length < chunkSize) {
    splitText.push(str);
    return splitText;
  }

  let wordEnd = 0;

  while (wordEnd < str.length) {
    const previousWordEnd = wordEnd;
    wordEnd += chunkSize;

    if (wordEnd >= str.length) {
      splitText.push(str.substring(previousWordEnd, str.length).trim());
      break;
    }

    while (str.charAt(wordEnd) !== ' ') {
      wordEnd -= 1;
    }
    splitText.push(str.substring(previousWordEnd, wordEnd).trim());
  }

  return splitText;
};
