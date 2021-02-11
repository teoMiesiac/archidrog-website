import styled from 'styled-components'

import { Breakpoint, getBreakpointMediaQuery } from '~/styles/media'

interface ImageProps {
  wMobile: number
  wTablet?: number
  wDesktop?: number
  wDesktopWide?: number
  wDesktopFull?: number
}

export const ImageWrapper = styled.div<ImageProps>`
  height: auto;
  width: ${props => props.wMobile}px;
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    width: ${props => props.wTablet}px;
  }
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP)} {
    width: ${props => props.wDesktop}px;
  }
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP_WIDE)} {
    width: ${props => props.wDesktopWide}px;
  }
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP_FULL)} {
    width: ${props => props.wDesktopFull}px;
  }
`
