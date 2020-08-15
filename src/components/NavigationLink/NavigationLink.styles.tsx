import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { Link } from 'gatsby'
import { Color, Transition } from '~/styles/constants'
import { themeColor, themeTransition } from '~/styles/getters'
import { NavigationLinkType } from './NavigationLink.constants'

const primaryLinkStyle = css`
  &:hover {
    border-bottom: 2px solid ${themeColor(Color.SECONDARY)};
  }
`

export const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-stretch: condensed;
  line-height: 1.73;
  letter-spacing: 0.4px;
  color: ${themeColor(Color.BLACK)};
  transition: all ${themeTransition(Transition.LINK)};
  ${theme('mode', {
    [NavigationLinkType.PRIMARY]: primaryLinkStyle
  })}
`
