import styled from 'styled-components'
import BackgroundImg from 'gatsby-background-image'
import { Flex } from 'reflexbox/styled-components'
import { fontSize, FontSizeProps } from 'styled-system'
import { Color, ZIndex } from '~/styles/constants'
import { themeColor, themeZIndex } from '~/styles/getters'

export const Title = styled.h1<FontSizeProps>`
  color: ${themeColor(Color.PRIMARY)};
  ${fontSize};
  font-weight: bold;
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.58px;
`

export const BackgroundMask = styled.div`
  width: 100%;
  object-fit: contain;
  height: 100%;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.85), #ffffff 90%);
  background-position: 0 0;
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Content = styled(Flex)`
  z-index: ${themeZIndex(ZIndex.WELCOME)};
`
