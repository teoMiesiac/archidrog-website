import { css, DefaultTheme } from 'styled-components'
import { Breakpoint, responsiveValue, sizes as breakpoints } from './media'
import { Border, Color, Font, Shadow, Size, ZIndex, Transition } from './constants'

type Producer<T> = (...args: unknown[]) => T
export type ThemeMap<T extends string | number, V = unknown> = Record<T, V>
export type ThemeMapDef<T extends string | number, V = unknown> = Record<T, V | Producer<V>>

export const colors: ThemeMapDef<Color, string> = {
  [Color.WHITE]: '#ffffff',
  [Color.BLACK]: '#000000',
  [Color.PRIMARY]: '#575756',
  [Color.SECONDARY]: '#afc90c',
  [Color.ERROR]: '#fa7265',
  [Color.GREY]: '#f9f9f9',
  [Color.GREY_400]: '#e2e2e2',
  [Color.GREY_500]: '#404040'
}

export const fonts: ThemeMapDef<Font, string> = {
  [Font.PRIMARY]: 'Roboto'
}

export const borders: ThemeMapDef<Border, string> = {
  [Border.REGULAR]: `1px solid ${colors[Color.PRIMARY]}`,
  [Border.MEDIUM_PRIMARY]: `2px solid ${colors[Color.PRIMARY]}}`,
  [Border.MEDIUM_SECONDARY]: `2px solid ${colors[Color.SECONDARY]}`,
  [Border.MEDIUM_WHITE]: `2px solid ${colors[Color.WHITE]}`
}

export const shadows: ThemeMapDef<Shadow> = {
  [Shadow.PRIMARY]: css`
    box-shadow: 0 4px 29px 0 rgba(252, 184, 19, 0.45);
  `,
  [Shadow.BUTTON]: css`
    box-shadow: 0 15px 20px -8px rgba(175, 201, 12, 0.25);
  `,
  [Shadow.CAROUSEL]: css`
    box-shadow: 21px 20px 35px 0 rgba(76, 89, 1, 0.27);
  `,
  [Shadow.OFFER]: css`
    box-shadow: 0 15px 20px -8px rgba(0, 0, 0, 0.09);
  `,
  [Shadow.MAP]: css`
    box-shadow: 0 24px 20px -10px rgba(0, 0, 0, 0.12);
  `,
  [Shadow.HEADER_MOBILE]: css`
    box-shadow: 0 15px 20px -12px rgba(0, 0, 0, 0.09);
  `
}

export const sizes: ThemeMapDef<Size, number> = {
  [Size.HEADER]: 80,
  [Size.CONTENT_HORIZONTAL_PADDING]: responsiveValue(16, { [Breakpoint.TABLET]: 24 }),
  [Size.CONTENT_VERTICAL_PADDING]: responsiveValue(8, { [Breakpoint.TABLET]: 16 })
}

export const activeBreakpoint: (props: { theme: DefaultTheme }) => Breakpoint = responsiveValue(Breakpoint.MOBILE, {
  [Breakpoint.DESKTOP_FULL]: Breakpoint.DESKTOP_FULL,
  [Breakpoint.DESKTOP_WIDE]: Breakpoint.DESKTOP_WIDE,
  [Breakpoint.DESKTOP]: Breakpoint.DESKTOP,
  [Breakpoint.TABLET]: Breakpoint.TABLET
})

export const zIndexes = {
  [ZIndex.CONTENT]: 0,
  [ZIndex.HEADER]: 10,
  [ZIndex.OVERLAY]: 100
}

export const transitions: ThemeMapDef<Transition, string> = {
  [Transition.DEFAULT]: `0.3s ease-in`,
  [Transition.LINK]: `0.3s ease-in`,
  [Transition.BUTTON]: `0.3s ease-in-out`
}

const gridBreakpoints = [breakpoints.tablet, breakpoints.desktop, breakpoints.desktopFull].map(
  breakpoint => `${breakpoint}px`
)

const styledTheme = {
  breakpoints: gridBreakpoints,
  space: []
}

export const theme = {
  colors,
  fonts,
  borders,
  shadows,
  sizes,
  zIndexes,
  activeBreakpoint,
  transitions,
  ...styledTheme
}
