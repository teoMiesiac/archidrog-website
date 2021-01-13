import { css } from 'styled-components'
import InterRegularWoff from '~/assets/fonts/Inter-Regular.woff'
import InterRegularWoff2 from '~/assets/fonts/Inter-Regular.woff2'
import InterMediumWoff from '~/assets/fonts/Inter-Medium.woff'
import InterMediumWoff2 from '~/assets/fonts/Inter-Medium.woff2'
import InterBoldWoff from '~/assets/fonts/Inter-Bold.woff'
import InterBoldWoff2 from '~/assets/fonts/Inter-Bold.woff2'
import InterLightWoff from '~/assets/fonts/Inter-Light.woff'
import InterLightWoff2 from '~/assets/fonts/Inter-Light.woff2'

export const FontCss = css`
  @font-face {
    font-family: 'Inter';
    src: url(${InterLightWoff2}) format('woff2'), url(${InterLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterRegularWoff2}) format('woff2'), url(${InterRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterMediumWoff2}) format('woff2'), url(${InterMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${InterBoldWoff2}) format('woff2'), url(${InterBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`
