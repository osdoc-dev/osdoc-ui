module.exports = {
  extends: ['prettier', require.resolve('osdoc-lint/dist/eslint')],
  rules: {
    'react/button-has-type': 0,
    '@typescript-eslint/no-var-requires': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
  },
};
