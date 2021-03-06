module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'react/prop-types': 0,
    'react/jsx-filename-extension': 0,
    'react/react-in-jsx-scope': 0,
    'no-restricted-syntax': 0,
    'guard-for-in': 0,
    'react/function-component-definition': 0,
    'no-await-in-loop': 0,
    'import/extensions': 0,
    'import/no-unresolved': 0,
    'no-use-before-define': 0,
    'import/no-extraneous-dependencies': 0,
    'import/prefer-default-export': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'react/jsx-no-constructed-context-values': 0,
    camelcase: 0,
    'class-methods-use-this': 0,
  },
};
