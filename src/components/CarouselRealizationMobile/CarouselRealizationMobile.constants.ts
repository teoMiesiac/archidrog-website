import { sizes, Breakpoint } from '~/styles/media'

export const responsive = {
  [Breakpoint.DESKTOP_FULL]: {
    breakpoint: { max: sizes.desktopFull, min: sizes.desktopWide },
    items: 1
  },
  [Breakpoint.DESKTOP_WIDE]: {
    breakpoint: { max: sizes.desktopWide, min: sizes.desktop },
    items: 1
  },
  [Breakpoint.DESKTOP]: {
    breakpoint: { max: sizes.desktop, min: sizes.tablet },
    items: 1
  },
  [Breakpoint.TABLET]: {
    breakpoint: { max: sizes.tablet, min: sizes.mobile },
    items: 1
  },
  [Breakpoint.MOBILE]: {
    breakpoint: { max: sizes.mobile, min: 0 },
    items: 1
  }
}
