import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { fontSize, TypographyProps } from 'styled-system'
import { Border, Color, Transition, Shadow } from '~/styles/constants'
import { themeBorder, themeColor, themeTransition, themeShadow } from '~/styles/getters'
import { ButtonPreviewType } from './ButtonPreview.constants'
import { Breakpoint, getBreakpointMediaQuery } from '~/styles/media'
import { TR } from '~/components/ReferenceTable/ReferenceTable.styles'

const PrimaryArrowButtonStyle = css`
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    &:hover {
      color: ${themeColor(Color.SECONDARY)} !important;
      &::after {
        background: ${themeColor(Color.WHITE)};
        width: 100%;
      }
    }
  }
`

const SecondaryArrowButtonStyle = css`
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    &:hover {
      color: ${themeColor(Color.WHITE)} !important;
      &::after {
        background: ${themeColor(Color.SECONDARY)};
        width: 100%;
      }
    }
  }
`

const PrimaryButtonTRHoverStyle = css`
  border: ${themeBorder(Border.MEDIUM_PRIMARY)};
  .icon .path {
    fill: ${themeColor(Color.PRIMARY)};
  }
  color: ${themeColor(Color.WHITE)};
`

const SecondaryButtonTRHoverStyle = css`
  color: ${themeColor(Color.SECONDARY)};
  .icon .path {
    fill: ${themeColor(Color.SECONDARY)};
  }
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    border: ${themeBorder(Border.MEDIUM_SECONDARY)};
  }
`

export const CustomButton = styled.button`
  position: relative;
  padding: 9px 20px;
  font-weight: bold;
  display: inline-block;
  transition: fill ${themeTransition(Transition.BUTTON)}, color ${themeTransition(Transition.BUTTON)},
    background-color ${themeTransition(Transition.BUTTON)}, width ${themeTransition(Transition.BUTTON)};
  z-index: 1;
  border: 2px solid transparent;

  ${theme('mode', {
    [ButtonPreviewType.PRIMARY]: PrimaryArrowButtonStyle,
    [ButtonPreviewType.SECONDARY]: SecondaryArrowButtonStyle
  })};
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    &:hover {
      ${themeShadow(Shadow.BUTTON)}
    }
  }
  &::after {
    transition: fill ${themeTransition(Transition.BUTTON)}, color ${themeTransition(Transition.BUTTON)},
      background-color ${themeTransition(Transition.BUTTON)}, width ${themeTransition(Transition.BUTTON)};

    height: 100%;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 0;
    z-index: -1;
  }

  .icon .path {
    transition: fill ${themeTransition(Transition.BUTTON)}, color ${themeTransition(Transition.BUTTON)},
      background-color ${themeTransition(Transition.BUTTON)}, width ${themeTransition(Transition.BUTTON)};
    fill: ${themeColor(Color.PRIMARY)};
  }

  ${TR}:hover & {
    ${theme('mode', {
      [ButtonPreviewType.PRIMARY]: PrimaryButtonTRHoverStyle,
      [ButtonPreviewType.SECONDARY]: SecondaryButtonTRHoverStyle
    })};
  }
`

export const IconPrimaryStyle = css`
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    ${CustomButton}:hover & {
      .icon .path {
        fill: ${themeColor(Color.SECONDARY)};
      }
    }
  }
`

export const IconSecondaryStyle = css`
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    ${CustomButton}:hover & {
      .icon .path {
        fill: ${themeColor(Color.WHITE)};
      }
    }
  }
`
export const IconWrapper = styled.div`
  height: 18px;
  width: 18px;
  margin-right: 5px;
  ${theme('mode', {
    [ButtonPreviewType.PRIMARY]: IconPrimaryStyle,
    [ButtonPreviewType.SECONDARY]: IconSecondaryStyle
  })}
`

export const TextWrapper = styled.span<TypographyProps>`
  ${fontSize}
  margin-right: 6px;
  letter-spacing: 0.6px;
  display: none;
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    display: initial;
  }
`
