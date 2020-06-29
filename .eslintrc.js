module.exports = {
  extends: ['prettier', require.resolve('osdoc-lint/dist/eslint')],
  rules: {
    'react/button-has-type': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
