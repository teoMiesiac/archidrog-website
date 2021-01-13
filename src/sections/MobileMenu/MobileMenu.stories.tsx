import React from 'react'
import MobileMenu from './MobileMenu.component'
import { Menu } from '../../../fixtures/navigation'
import { boolean, select, withKnobs } from '@storybook/addon-knobs'
import { MobileMenuType } from './MobileMenu.constants'
import { action } from '@storybook/addon-actions'

const knobs = {
  mode: (defaultValue: MobileMenuType) => select('mode', [MobileMenuType.PRIMARY], defaultValue),
  active: (defaultValue: boolean) => boolean('active', defaultValue)
}

const renderComponent = () => {
  const defaultProps = {
    mode: knobs.mode(MobileMenuType.PRIMARY),
    active: knobs.active(true),
    onClose: action('Close'),
    items: Menu
  }

  return <MobileMenu {...defaultProps} />
}

export default {
  title: 'Sections/MobileMenu',
  decorators: [withKnobs]
}

export const Primary = () => renderComponent()
