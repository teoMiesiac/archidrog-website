import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { Breakpoint, media } from '~/styles/media'

export const HeaderWrapper = styled.header`
  width: 100%;
  //max-width: 1480px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15px;

  ${media(Breakpoint.TABLET)`
    padding:0 30px;
  `}
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
