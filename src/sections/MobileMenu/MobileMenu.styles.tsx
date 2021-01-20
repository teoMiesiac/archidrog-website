import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { Breakpoint, getBreakpointMediaQuery, media } from '~/styles/media'
import { Border, Color, Shadow } from '~/styles/constants'
import { themeBorder, themeColor, themeShadow } from '~/styles/getters'
import { MobileMenuType } from './MobileMenu.constants'

const HEADER_HEIGHT = '45px'
const HEADER_PADDING = '0 10px'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  ${media(Breakpoint.DESKTOP)`
    display: none
  `}
`

const drawerInnerPrimaryStyle = css`
  background-color: ${themeColor(Color.WHITE)};
`

export const DrawerInnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  font-size: 1.6rem;
  ${theme('mode', {
    [MobileMenuType.PRIMARY]: drawerInnerPrimaryStyle
  })}
`

export const DrawerHeader = styled.div`
  height: ${HEADER_HEIGHT};
  padding: 8px 28px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  border-bottom: ${themeBorder(Border.REGULAR)};
  ${themeShadow(Shadow.HEADER_MOBILE)};

  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    height: 69px;
    padding: 21px 30px;
  }
`

export const AccordionHeader = styled.div`
  width: 100%;
  font-size: 1.6rem;
  font-weight: bold;
  border-bottom: ${themeBorder(Border.REGULAR)};
  padding: 19px 10px;
  text-align: left;
`
