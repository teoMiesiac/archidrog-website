import { DefaultTheme, ThemeProps } from 'styled-components'
import { append, compose, flip, identity, ifElse, concat, path, always } from 'ramda'
import { renderWhenTrue } from '~utils'
import { Border, Color, Font, Shadow, Size, ZIndex, Transition } from './constants'

type ThemeGetter<P = string, T extends DefaultTheme = DefaultTheme> = (propName: P) => (props: { theme: T }) => string

const ensureArray = ifElse(Array.isArray, identity, flip(append)([]))

export const fromTheme = compose(path, concat(['theme']), ensureArray)

const themeGetter = <T>(path: string[]) => compose(fromTheme, concat(path), ensureArray) as ThemeGetter<T>

export const themeColor = themeGetter<Color>(['colors'])
export const themeBorder = themeGetter<Border>(['borders'])
export const themeShadow = themeGetter<Shadow>(['shadows'])
export const themeZIndex = themeGetter<ZIndex>(['zIndexes'])
export const themeFont = themeGetter<Font>(['fonts'])
export const themeSize = themeGetter<Size>(['sizes'])
export const themeTransition = themeGetter<Transition>(['transitions'])

type ThemeValueGetter<T extends DefaultTheme = DefaultTheme, V = unknown> = (theme: T) => V

export const styleWhenTrue = <T extends DefaultTheme = DefaultTheme>(getThemeVal: ThemeValueGetter<T, boolean>, styles: unknown) =>
  compose(renderWhenTrue(always(styles)), ({ theme }: ThemeProps<T>) => getThemeVal(theme))

export const styleWhenEquals = <T extends DefaultTheme = DefaultTheme>(
  getThemeVal: ThemeValueGetter<T, unknown>,
  expectedValue: unknown,
  styles: unknown
) => compose(renderWhenTrue(always(styles)), ({ theme }: ThemeProps<T>) => getThemeVal(theme) === expectedValue)
