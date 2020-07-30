module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  env: {
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  rules: {
    'import/prefer-default-export': 'off',
    'react/require-default-props': [2, { ignoreFunctionalComponents: true }],
  },
};
