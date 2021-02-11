import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { Breakpoint, media } from '~/styles/media'
import BackgroundImage from 'gatsby-background-image'

export const HeaderWrapper = styled.header``

export const HeaderBackgroundImage = styled(BackgroundImage)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const BackgroundMask = styled.div`
  width: 100%;
  object-fit: contain;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.95), #ffffff 85%);
  background-position: 0 0;
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
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
