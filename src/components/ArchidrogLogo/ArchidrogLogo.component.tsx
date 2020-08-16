import React from 'react'
import { ThemeProvider } from 'styled-components'
import { ArchidrogLogoType } from './ArchidrogLogo.constants'
import { Image } from './ArchidrogLogo.styles'
import LogoOnWhite from '~/assets/images/archidrog-logo-color-onwhite.png'
import LogoOnDark from '~/assets/images/archidrog-logo-color-ondark.png'

interface Props {
  mode?: ArchidrogLogoType
  wMobile: number
  wTablet?: number
  wDesktop?: number
  wDesktopWide?: number
  wDesktopFull?: number
}

const ArchidrogLogo = ({
  mode = ArchidrogLogoType.PRIMARY,
  wMobile,
  wTablet,
  wDesktop,
  wDesktopWide,
  wDesktopFull
}: Props) => (
  <ThemeProvider theme={{ mode }}>
    <Image
      src={mode === ArchidrogLogoType.PRIMARY ? LogoOnDark : LogoOnWhite}
      alt="archidrog logo"
      wMobile={wMobile}
      wTablet={wTablet}
      wDesktop={wDesktop}
      wDesktopWide={wDesktopWide}
      wDesktopFull={wDesktopFull}
    />
  </ThemeProvider>
)

export default ArchidrogLogo
