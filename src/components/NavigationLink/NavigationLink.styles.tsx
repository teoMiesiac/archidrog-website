import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { Link } from 'gatsby'
import { Color, Transition } from '~/styles/constants'
import { themeColor, themeTransition } from '~/styles/getters'
import { NavigationLinkType } from './NavigationLink.constants'

const primaryLinkStyle = css`
  &:after {
    content: '';
    display: block;
    position: absolute;
    bottom: -5px;
    left: 0px;
    width: 0;
    height: 2px;
    background: ${themeColor(Color.SECONDARY)};
    transition: width 0.3s;
  }

  &:hover::after {
    width: 100%;
    //transition: width .3s;
  }
`

export const Wrapper = styled.div`
  &:not(:last-of-type) {
    margin-right: 55px;
  }
`

export const StyledLink = styled(Link)`
  position: relative;
  font-size: 1.5rem;
  font-stretch: condensed;
  line-height: 1.73;
  letter-spacing: 0.4px;
  color: ${themeColor(Color.BLACK)};
  transition: border-bottom ${themeTransition(Transition.LINK)};
  ${theme('mode', {
    [NavigationLinkType.PRIMARY]: primaryLinkStyle
  })}
`
