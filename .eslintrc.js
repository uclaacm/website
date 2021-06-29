module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@next/next/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  ignorePatterns: ['/build/*'],
  plugins: ['react', 'import'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'eol-last': ['error', 'always'],
    'react/prop-types': 'off',

    // many of these rules are taken from our friends at Creative Labs;
    // see their config here: https://github.com/UCLA-Creative-Labs/sunshine/blob/master/.eslintrc.js

    'linebreak-style': ['error', 'unix'],

    // Style
    'quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
      },
    ],

    // ensures clean diffs, see https://medium.com/@nikgraf/why-you-should-enforce-dangling-commas-for-multiline-statements-d034c98e36f8
    'comma-dangle': ['error', 'always-multiline'],

    // Require all imported dependencies are actually declared in package.json
    'import/no-extraneous-dependencies': [
      'error',
      {
        optionalDependencies: false, // Disallow importing optional dependencies (those shouldn't be in use in the project)
        peerDependencies: false, // Disallow importing peer dependencies (that aren't also direct dependencies)
      },
    ],

    // Require all imported libraries actually resolve (!!required for import/no-extraneous-dependencies to work!!)
    'import/no-unresolved': ['error'],

    // Require an ordering on all imports
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],

    // Cannot import from the same module twice
    'no-duplicate-imports': ['error'],

    // Required spacing in property declarations (copied from TSLint, defaults are good)
    'key-spacing': ['error'],

    // Require semicolons
    'semi': ['error', 'always'],

    // Don't unnecessarily quote properties
    'quote-props': ['error', 'consistent-as-needed'],

    // No multiple empty lines
    'no-multiple-empty-lines': ['error'],

    // Max line lengths
    'max-len': [
      'error',
      {
        code: 120,
        ignoreUrls: true, // Most common reason to disable it
        ignoreStrings: true, // These are not fantastic but necessary for error messages
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignoreRegExpLiterals: true,
      },
    ],

    // Don't leave log statements littering the premises!
    'no-console': ['error'],

    // Useless diff results
    'no-trailing-spaces': ['error'],

    // Must use foo.bar instead of foo['bar'] if possible
    'dot-notation': ['error'],

    // Are you sure | is not a typo for || ?
    'no-bitwise': ['error'],
  },
};
