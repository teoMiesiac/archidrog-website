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
  [Color.ERROR]: '#fa7265'
}

export const fonts: ThemeMapDef<Font, string> = {
  [Font.PRIMARY]: 'Inter'
}

export const borders: ThemeMapDef<Border, string> = {
  [Border.REGULAR]: `1px solid ${colors[Color.BLACK]}`
}

export const shadows: ThemeMapDef<Shadow> = {
  [Shadow.PRIMARY]: css`
    box-shadow: 0 4px 29px 0 rgba(252, 184, 19, 0.45);
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
  [Transition.DEFAULT]: `0.3s ease-in`
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
