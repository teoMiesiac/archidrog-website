import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Wrapper, StyledLink } from './NavigationLink.styles'
import { NavigationLinkType } from './NavigationLink.constants'

interface Props {
  mode?: NavigationLinkType
  to: string
  name: string
  offset?: number
}

const NavigationLink = ({ mode = NavigationLinkType.PRIMARY, to, name, offset }: Props): JSX.Element => (
  <ThemeProvider theme={{ mode }}>
    <Wrapper>
      <StyledLink to={to} spy={true} hashSpy={true} smooth={true} offset={offset} activeClassName="active">
        {name}
      </StyledLink>
    </Wrapper>
  </ThemeProvider>
)

export default NavigationLink
