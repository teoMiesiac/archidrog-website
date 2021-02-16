import styled, { keyframes } from 'styled-components'
import { ZIndex } from '~/styles/constants'
import { themeZIndex } from '~/styles/getters'

const SLIDE_TRANSITION = '0.5s cubic-bezier(0.23, 1, 0.32, 1)'

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(0);
  }
`

const slideOut = keyframes`
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-100%);
  }
`

interface WrapperProps {
  headerHeight: number
}

export const Wrapper = styled.aside<WrapperProps>`
  position: fixed;
  bottom: 0;
  top: ${props => props.headerHeight}px;
  z-index: ${themeZIndex(ZIndex.OVERLAY)};
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 500px;
  transform: translateX(-100%);

  &.animate {
    animation: ${slideOut} ${SLIDE_TRANSITION} forwards;

    &.active {
      animation: ${slideIn} ${SLIDE_TRANSITION} forwards;
    }
  }
`

export const Backdrop = styled.div`
  position: fixed;
  width: 0%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.4;
  &.active {
    width: 100%;
  }
`
