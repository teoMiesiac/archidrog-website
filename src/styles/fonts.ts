import { css } from 'styled-components'

import RobotoThin from '~/assets/fonts/Roboto-Thin.ttf'
import RobotoLight from '~/assets/fonts/Roboto-Light.ttf'
import RobotoRegular from '~/assets/fonts/Roboto-Regular.ttf'
import RobotoMedium from '~/assets/fonts/Roboto-Medium.ttf'
import RobotoBold from '~/assets/fonts/Roboto-Bold.ttf'
import RobotoBlack from '~/assets/fonts/Roboto-Black.ttf'

export const FontCss = css`
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThin}) format('truetype');
    font-weight: 100;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBlack}) format('truetype');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`
