import { createGlobalStyle } from 'styled-components'
import { Font, Color } from './constants'
import { themeFont, themeColor } from './getters'
import { ResetCss } from './reset'
import { FontCss } from './fonts'

export const GlobalStyle = createGlobalStyle`
  ${FontCss}
  ${ResetCss}

  html, body {
  }

  html {
    box-sizing: border-box;
    font-family: ${themeFont(Font.PRIMARY)};
    font-size: 62.5%;
  }

  body {
    background-color: ${themeColor(Color.WHITE)}
  }

  *, *:before, *:after {
    box-sizing: inherit;
    font: inherit;
    margin: 0;
    padding: 0;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  a {
    cursor: pointer;
  }

  button,
  input,
  a {
    border: 0;
    background: none;
    color: inherit;
    outline: none;

    &::-moz-focus-inner,&:focus,
    &:hover,
    &:active {
      outline: none;
      border: 0;
    }
  }
`
