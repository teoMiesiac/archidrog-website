import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Breakpoint, getBreakpointMediaQuery } from '~/styles/media'
import { themeZIndex } from '~/styles/getters'
import { ZIndex } from '~/styles/constants'

export const Wrapper = styled.div<SpaceProps>`
  ${space};
  z-index: ${themeZIndex(ZIndex.CONTENT_PARALLAX)};
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP)} {
    display: none;
  }
`
