import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');

  html {
    box-sizing: border-box;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  html, body, div#root {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
`

export default GlobalStyle
