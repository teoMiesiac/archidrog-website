import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { ButtonArrowType, ButtonArrowDirection } from './ButtonArrow.constants'
import { Border, Color, Transition, Shadow } from '~/styles/constants'
import { themeBorder, themeColor, themeTransition, themeShadow } from '~/styles/getters'

const PrimaryArrowButtonStyle = css`
  border: ${themeBorder(Border.MEDIUM_WHITE)};
  &:hover {
    border: ${themeBorder(Border.MEDIUM_SECONDARY)};
  }
`
const SecondaryArrowButtonStyle = css`
  border: ${themeBorder(Border.MEDIUM_SECONDARY)};
  &:hover {
    border: ${themeBorder(Border.MEDIUM_WHITE)};
  }
`

export const Button = styled.button`
  width: 40px;
  height: 40px;
  transition: all ${themeTransition(Transition.BUTTON)};
  ${theme('mode', {
    [ButtonArrowType.PRIMARY]: PrimaryArrowButtonStyle,
    [ButtonArrowType.SECONDARY]: SecondaryArrowButtonStyle
  })};
  &:hover {
    ${themeShadow(Shadow.BUTTON)}
  }
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
