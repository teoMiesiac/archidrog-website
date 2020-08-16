import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Wrapper, Line } from './Hamburger.styles'

interface Props {
  onClick(event: React.MouseEvent<HTMLButtonElement>): void
  active: boolean
}

export interface HamburgerTheme extends DefaultTheme {
  active: boolean
}

function Hamburger({ onClick, active }: Props): JSX.Element {
  return (
    <ThemeProvider theme={{ active } as HamburgerTheme}>
      <Wrapper onClick={onClick}>
        <Line />
        <Line />
        <Line />
        <Line />
      </Wrapper>
    </ThemeProvider>
  )
}

export default Hamburger
