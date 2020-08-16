import React from 'react'
import { number, select, withKnobs } from '@storybook/addon-knobs'
import { ArchidrogLogoType } from './ArchidrogLogo.constants'
import ArchidrogLogo from './ArchidrogLogo.component'

const knobs = {
  wMobile: (defaultValue: number) => number('wMobile', defaultValue),
  wTablet: (defaultValue: number) => number('wTablet', defaultValue),
  wDesktop: (defaultValue: number) => number('wDesktop', defaultValue),
  wDesktopWide: (defaultValue: number) => number('wDekstopWide', defaultValue),
  wDesktopFull: (defaultValue: number) => number('wDekstopFull', defaultValue),
  mode: (defaultValue: ArchidrogLogoType) =>
    select('mode', [ArchidrogLogoType.PRIMARY, ArchidrogLogoType.SECONDARY], defaultValue)
}

const renderComponent = (props = {}) => {
  const defaultProps = {
    wMobile: knobs.wMobile(100),
    wTablet: knobs.wTablet(120),
    wDesktop: knobs.wDesktop(140),
    wDesktopWide: knobs.wDesktopWide(160),
    wDesktopFull: knobs.wDesktopFull(180),
    mode: knobs.mode(ArchidrogLogoType.PRIMARY)
  }

  return <ArchidrogLogo {...defaultProps} {...props} />
}

export default {
  title: 'Shared|ArchidrogLogo',
  decorators: [withKnobs]
}

export const Primary = () => renderComponent({ mode: knobs.mode(ArchidrogLogoType.PRIMARY) })
export const Secondary = () => renderComponent({ mode: knobs.mode(ArchidrogLogoType.SECONDARY) })
