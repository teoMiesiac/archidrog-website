import styled from 'styled-components'
import Img from 'gatsby-image'
import { width, left, padding, top, margin, LayoutProps, fontSize, FontProps } from 'styled-system'
import { Flex } from 'reflexbox/styled-components'
import { Color, Transition } from '~/styles/constants'
import { themeColor, themeTransition } from '~/styles/getters'
import { Breakpoint, getBreakpointMediaQuery } from '~/styles/media'

export const ImageContainer = styled(Flex)<LayoutProps>`
  position: relative;
  ${top};
  z-index: 2;
`

export const MainImage = styled(Img)<LayoutProps>`
  ${width};
`
export const DesktopImage = styled(Img)<LayoutProps>`
  display: none;
  ${width};
  ${margin};
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP)} {
    display: initial;
  }
`

export const Content = styled(Flex)`
  position: relative;
  ${left};
  ${padding};
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP)} {
    background-color: ${themeColor(Color.GREY)};

    &::before {
      top: 0px;
      left: -80px;
      position: absolute;
      content: '';
      width: 80px;
      height: 100%;
      background-color: ${themeColor(Color.GREY)};
    }
  }
`

export const Title = styled.p<FontProps>`
  ${fontSize};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.67px;
  color: ${themeColor(Color.GREY_500)};
`

export const BulletPointList = styled.ul`
  padding-top: 10px;
`
export const BulletPoint = styled.li`
  padding: 5px 0;
`

export const BulletPointText = styled.p`
  width: 100%;
  text-align: left;
  position: relative;
  padding-left: 12px;
  font-size: 1.4rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: 0.4px;
  color: ${themeColor(Color.PRIMARY)};
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &::before {
    top: -2px;
    position: relative;
    content: '';
    display: inline-block;
    margin-right: 8px;
    width: 5px;
    height: 5px;
    background-color: ${themeColor(Color.SECONDARY)};
  }
`
