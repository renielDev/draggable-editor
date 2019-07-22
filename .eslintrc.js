module.exports = {
  env: {
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
    "react/jsx-filename-extension": [0],
    'import/no-extraneous-dependencies': [
      "error",
      {
        devDependencies: [
          '.storybook/**',
          'stories/**',
          'webpack.config.js'
        ]
      }
    ],
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
