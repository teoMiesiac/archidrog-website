import { Breakpoint, sizes } from '../src/styles/media'

export const customViewports = {
  [Breakpoint.MOBILE]: {
    name: Breakpoint.MOBILE,
    styles: {
      width: `${sizes[Breakpoint.MOBILE]}px`,
      height: '800px'
    }
  },
  [Breakpoint.TABLET]: {
    name: Breakpoint.TABLET,
    styles: {
      width: `${sizes[Breakpoint.TABLET]}px`,
      height: '800px'
    }
  },
  [Breakpoint.DESKTOP]: {
    name: Breakpoint.DESKTOP,
    styles: {
      width: `${sizes[Breakpoint.DESKTOP]}px`,
      height: '800px'
    }
  },
  [Breakpoint.DESKTOP_WIDE]: {
    name: Breakpoint.DESKTOP_WIDE,
    styles: {
      width: `${sizes[Breakpoint.DESKTOP_WIDE]}px`,
      height: '800px'
    }
  },
  [Breakpoint.DESKTOP_FULL]: {
    name: Breakpoint.DESKTOP_FULL,
    styles: {
      width: `${sizes[Breakpoint.DESKTOP_FULL]}px`,
      height: '800px'
    }
  }
}
