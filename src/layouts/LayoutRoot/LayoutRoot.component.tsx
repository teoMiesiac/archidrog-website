import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ParallaxProvider } from 'react-scroll-parallax'
import { DataStoreProvider } from '~/store/store'
import { theme } from '~/styles/theme'
import { GlobalStyle } from '~/styles/global'

const GlobalLayout = ({ children }): JSX.Element => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <DataStoreProvider>
      <ParallaxProvider>{children}</ParallaxProvider>
    </DataStoreProvider>
  </ThemeProvider>
)

export default GlobalLayout
