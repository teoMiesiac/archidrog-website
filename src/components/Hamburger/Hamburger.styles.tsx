import styled, { css } from 'styled-components'
import { Color } from '~/styles/constants'
import { themeColor, styleWhenTrue } from '~/styles/getters'
import { HamburgerTheme } from './Hamburger.component'

const WRAPPER_HEIGHT = 18
const LINE_HEIGHT = 3
const LINE_SPACING = (WRAPPER_HEIGHT - LINE_HEIGHT * 3) / 2
const WRAPPER_TRANSITION = '0.5s ease-in-out'
const LINE_TRANSITION = '0.25s ease-in-out'

export const Line = styled.span`
  display: block;
  position: absolute;
  height: ${LINE_HEIGHT}px;
  width: 100%;
  background-color: ${themeColor(Color.PRIMARY)};
  border-radius: 3px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: ${LINE_TRANSITION};

  &:nth-child(1) {
    top: 0;
  }

  &:nth-child(2),
  &:nth-child(3) {
    top: ${LINE_SPACING + LINE_HEIGHT}px;
  }

  &:nth-child(4) {
    top: ${LINE_SPACING * 2 + LINE_HEIGHT * 2}px;
  }
`

const activeStyle = css`
  ${Line} {
    background-color: ${themeColor(Color.SECONDARY)};

    &:nth-child(1),
    &:nth-child(4) {
      top: ${WRAPPER_HEIGHT}px;
      width: 0%;
      left: 50%;
    }

    &:nth-child(2) {
      transform: rotate(45deg);
    }

    &:nth-child(3) {
      transform: rotate(-45deg);
    }
  }
`

export const Wrapper = styled.button`
  width: 19px;
  height: ${WRAPPER_HEIGHT}px;
  position: relative;
  transform: rotate(0deg);
  transition: ${WRAPPER_TRANSITION};
  ${styleWhenTrue<HamburgerTheme>(({ active }) => active, activeStyle)}
`
