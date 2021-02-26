import styled, { css } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { Breakpoint, media } from '~/styles/media'
import { ZIndex, Transition } from '~/styles/constants'
import { styleWhenTrue, themeZIndex, themeTransition } from '~/styles/getters'
import { HeaderThemeProps } from './Header.component'

const stickyHeader = css`
  transition: box-shadow ${themeTransition(Transition.SHADOW)}, background-color ${themeTransition(Transition.SHADOW)};
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  background-color: rgba(255, 255, 255, 1);
`

const drawerActive = css`
  transition: box-shadow ${themeTransition(Transition.SHADOW)}, background-color ${themeTransition(Transition.SHADOW)};
  box-shadow: 0 1px 6px rgb(0 0 0 / 20%);
  background-color: rgba(255, 255, 255, 1);
`

export const HeaderWrapper = styled.header`
  position: sticky;
  // -1 to make "isSticky" hook work
  top: -1px;
  z-index: ${themeZIndex(ZIndex.HEADER)};
  transition: box-shadow ${themeTransition(Transition.SHADOW)}, background-color ${themeTransition(Transition.SHADOW)};
  background-color: rgba(255, 255, 255, 0);
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  ${styleWhenTrue<HeaderThemeProps>(({ isSticky }) => isSticky, stickyHeader)};
  ${styleWhenTrue<HeaderThemeProps>(({ drawerActive }) => drawerActive, drawerActive)};
`

export const BurgerWrapper = styled.div`
  margin-right: 20px;
  ${media(Breakpoint.DESKTOP)`
    display: none;
  `}
`

export const MobileIconWrapper = styled.div`
  ${media(Breakpoint.DESKTOP)`
    display: none;
  `}
`

export const MobileContentWrapper = styled(Flex)`
  ${media(Breakpoint.DESKTOP)`
    display: none;
  `}
`

export const DesktopContentWrapper = styled(Flex)`
  display: none;
  ${media(Breakpoint.DESKTOP)`
    display: flex;
  `}
`
