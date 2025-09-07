module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-sass-guidelines'],
  plugins: ['stylelint-scss'],
  ignoreFiles: ['dist/*', 'node_modules/*', 'build/**/*'],
  rules: {
    'color-named': null,
    'selector-max-id': null,
    'selector-no-qualifying-type': null,
    'property-no-vendor-prefix': null,

    'max-nesting-depth': null,
    'selector-max-compound-selectors': null,
    'media-query-no-invalid': null,
    '@stylistic/color-hex-case': 'upper',

    'scss/at-import-partial-extension-disallowed-list': 'never',
  },
};
