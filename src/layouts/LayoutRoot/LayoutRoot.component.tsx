import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BodyWrapper } from './LayoutRoot.styles'
import { DataStoreProvider } from '~/store/store'
import { GlobalStyle } from '~/styles/global'
import { theme } from '~/styles/theme'

const GlobalLayout = ({ children }): JSX.Element => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <DataStoreProvider>{children}</DataStoreProvider>
    </ThemeProvider>
  </>
)

export default GlobalLayout
