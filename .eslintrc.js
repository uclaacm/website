module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    sourceType: 'module'
  },
  plugins: [
    'jest',
    'react'
  ],
  settings: {
    react: {
      version: 'detect',
    }
  },
  rules: {
    'react/prop-types': 'off'
  }
}
