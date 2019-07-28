module.exports = {
  setupFilesAfterEnv: [
    // 'babel-polyfill',
    '@testing-library/jest-dom/extend-expect',
    'jest-styled-components',
    '@testing-library/react/cleanup-after-each',
  ],
}
