import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../src/styles/global'
//import RouterMock from '../config/storybook/mockRouter'
// import { AppProvider } from '../src/contexts/AppStateContext'

export const withTheme = theme => story => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {story()}
    </>
  </ThemeProvider>
)

/*
 <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <AppProvider>
        <RouterMock>{story()}</RouterMock>
      </AppProvider>
    </>
  </ThemeProvider>
 */
