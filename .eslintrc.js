module.exports = {
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  parser: "babel-eslint",
  plugins: [
    'react',
    'prettier'
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/no-extraneous-dependencies': 0,
    'prettier/prettier': [
      "error", 
      {
        trailingComma: "es5",
        tabWidth: 2,
        semi: false,
        singleQuote: true
      }
    ]
  },
};
