import styled, { css } from 'styled-components'
import { Link } from 'gatsby'
import { Flex } from 'reflexbox'
import { Color, Transition, Shadow } from '~/styles/constants'
import { themeColor, themeTransition, themeShadow } from '~/styles/getters'
import {
  display,
  minHeight,
  flexDirection,
  flexWrap,
  width,
  alignItems,
  justifyContent,
  DisplayProps
} from 'styled-system'

export const ButtonWrapper = styled.div`
  transition: all ${themeTransition(Transition.BUTTON)};
  opacity: 0;
`

export const Wrapper = styled(Flex)`
  width: 100%;
  border-bottom: 1px solid ${themeColor(Color.GREY_400)};
  transition: all ${themeTransition(Transition.BUTTON)};
  &:hover {
    ${themeShadow(Shadow.OFFER)};
  }

  &:hover ${ButtonWrapper} {
    opacity: 1;
  }
`

const titleCss = css`
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: 0.53px;
  color: ${themeColor(Color.PRIMARY)};
`

export const TitleMobile = styled(Link)<DisplayProps>`
  ${titleCss};
  ${display};
`

export const Title = styled.div<DisplayProps>`
  ${minHeight};
  ${flexDirection};
  ${flexWrap};
  ${width};
  ${alignItems};
  ${justifyContent};
  ${display};
  ${titleCss};
`

export const SubOfferList = styled.ul`
  padding-top: 10px;
`

export const SubOffer = styled.li`
  padding: 5px 0;
`

export const SubOfferLink = styled(Link)`
  position: relative;
  padding-left: 12px;
  font-size: 1.4rem;
  text-align: center;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: 0.4px;
  color: ${themeColor(Color.PRIMARY)};
  transition: all ${themeTransition(Transition.BUTTON)};
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
  &:hover {
    font-weight: bold;
  }
`
