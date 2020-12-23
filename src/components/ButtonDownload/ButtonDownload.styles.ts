import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { fontSize, TypographyProps } from 'styled-system'
import { Border, Color, Transition, Shadow } from '~/styles/constants'
import { themeBorder, themeColor, themeTransition, themeShadow } from '~/styles/getters'
import { ButtonDownloadType } from './ButtonDownload.constants'

const PrimaryArrowButtonStyle = css`
  border: ${themeBorder(Border.MEDIUM_WHITE)};
  color: ${themeColor(Color.WHITE)};
  &:hover {
    color: ${themeColor(Color.SECONDARY)};
    &::after {
      background: ${themeColor(Color.WHITE)};
      width: 100%;
    }
  }
`

const SecondaryArrowButtonStyle = css`
  border: ${themeBorder(Border.MEDIUM_SECONDARY)};
  color: ${themeColor(Color.SECONDARY)};
  &:hover {
    color: ${themeColor(Color.WHITE)};
    &::after {
      background: ${themeColor(Color.SECONDARY)};
      width: 100%;
    }
  }
`

export const CustomButton = styled.a`
  position: relative;
  padding: 9px 20px;
  font-weight: bold;
  display: inline-block;
  transition: all ${themeTransition(Transition.BUTTON)};
  z-index: 1;
  ${theme('mode', {
    [ButtonDownloadType.PRIMARY]: PrimaryArrowButtonStyle,
    [ButtonDownloadType.SECONDARY]: SecondaryArrowButtonStyle
  })};
  &:hover {
    ${themeShadow(Shadow.BUTTON)}
  }
  &::after {
    transition: all ${themeTransition(Transition.BUTTON)};
    height: 100%;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    z-index: -1;
  }
`

export const IconPrimaryStyle = css`
  .icon .path {
    transition: all ${themeTransition(Transition.BUTTON)};
    fill: ${themeColor(Color.WHITE)};
  }
  ${CustomButton}:hover & {
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
  ${CustomButton}:hover & {
    .icon .path {
      fill: ${themeColor(Color.WHITE)};
    }
  }
`
export const IconWrapper = styled.div`
  height: 18px;
  width: 18px;
  margin-right: 5px;
  ${theme('mode', {
    [ButtonDownloadType.PRIMARY]: IconPrimaryStyle,
    [ButtonDownloadType.SECONDARY]: IconSecondaryStyle
  })}
`

export const TextWrapper = styled.span<TypographyProps>`
  ${fontSize}
  margin-right: 6px;
  letter-spacing: 0.6px;
`
