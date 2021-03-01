import React from 'react'
import { ThemeProvider } from 'styled-components'
import { DataStoreProvider } from '~/store/store'
import { theme } from '~/styles/theme'

const GlobalLayout = ({ children }): JSX.Element => (
  <>
    <ThemeProvider theme={theme}>
      <DataStoreProvider>{children}</DataStoreProvider>
    </ThemeProvider>
  </>
)

export default GlobalLayout
