import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BodyWrapper } from './LayoutRoot.styles'
import { GlobalStyle } from '~/styles/global'
import { theme } from '~/styles/theme'

const GlobalLayout = ({ children }): JSX.Element => (
  <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BodyWrapper>{children}</BodyWrapper>
    </ThemeProvider>
  </>
)

export default GlobalLayout
