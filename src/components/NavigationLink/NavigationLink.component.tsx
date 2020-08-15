import React from 'react'
import { GatsbyLinkProps } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { StyledLink } from './NavigationLink.styles'
import { NavigationLinkType } from './NavigationLink.constants'

interface Props {
  mode?: NavigationLinkType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkProps: GatsbyLinkProps<any>
  to: string
  name: string
}

const NavigationLink = ({ mode = NavigationLinkType.PRIMARY, to, name, ...linkProps }: Props): JSX.Element => (
  <ThemeProvider theme={{ mode }}>
    <StyledLink to={to} {...linkProps}>
      {name}
    </StyledLink>
  </ThemeProvider>
)

export default NavigationLink
