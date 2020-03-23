import { createGlobalStyle } from 'styled-components'

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'Dosis';
    src: url('/fonts/Dosis-VariableFont_wght.ttf') format('truetype');
    font-style: normal;
    font-display: swap;
  }

  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    user-select: none;
    font-family: 'Dosis', sans-serif;
    text-rendering: optimizeLegibility;
  }
`
