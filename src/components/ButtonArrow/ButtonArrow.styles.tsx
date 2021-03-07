import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { ButtonArrowType, ButtonArrowDirection } from './ButtonArrow.constants'
import { Border, Color, Transition, Shadow } from '~/styles/constants'
import { themeBorder, themeColor, themeTransition, themeShadow } from '~/styles/getters'

const PrimaryArrowButtonStyle = css`
  border: ${themeBorder(Border.MEDIUM_WHITE)};
  &:hover {
    &::after {
      background: ${themeColor(Color.WHITE)};
      width: 100%;
    }
  }
`
const SecondaryArrowButtonStyle = css`
  border: ${themeBorder(Border.MEDIUM_SECONDARY)};
  &:hover {
    &::after {
      background: ${themeColor(Color.SECONDARY)};
      width: 100%;
    }
  }
`

const AnimationFromRightToLeft = css`
  &::after {
    left: 0;
  }
`

const AnimationFromLeftToRight = css`
  &::after {
    right: 0;
  }
`

export const Button = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  transition: all ${themeTransition(Transition.BUTTON)};
  z-index: 1;
  ${theme('mode', {
    [ButtonArrowType.PRIMARY]: PrimaryArrowButtonStyle,
    [ButtonArrowType.SECONDARY]: SecondaryArrowButtonStyle
  })};
  &:hover {
    ${themeShadow(Shadow.BUTTON)}
  }
  &::after {
    transition: all ${themeTransition(Transition.BUTTON)};
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    width: 0;
    z-index: -1;
  }

  ${theme('direction', {
    [ButtonArrowDirection.RIGHT]: AnimationFromRightToLeft,
    [ButtonArrowDirection.LEFT]: AnimationFromLeftToRight
  })}
`

export const IconRightStyle = css`
  transform: rotate(180deg);
`

export const IconLeftStyle = css``

export const IconPrimaryStyle = css`
  .icon .path {
    transition: all ${themeTransition(Transition.BUTTON)};
    fill: ${themeColor(Color.WHITE)};
  }
  ${Button}:hover & {
    .icon .path {
      fill: ${themeColor(Color.SECONDARY)};
    }
  }
`

export const IconSecondaryStyle = css`
  .icon .path {
    transition: all ${themeTransition(Transition.BUTTON)};
    fill: ${themeColor(Color.SECONDARY)};
  }
  ${Button}:hover & {
    .icon .path {
      fill: ${themeColor(Color.WHITE)};
    }
  }
`
export const IconWrapper = styled.div`
  height: 13px;
  width: 13px;
  ${theme('mode', {
    [ButtonArrowType.PRIMARY]: IconPrimaryStyle,
    [ButtonArrowType.SECONDARY]: IconSecondaryStyle
  })}
  ${theme('direction', {
    [ButtonArrowDirection.RIGHT]: IconRightStyle,
    [ButtonArrowDirection.LEFT]: IconLeftStyle
  })}
`
