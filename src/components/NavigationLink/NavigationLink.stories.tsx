import React from 'react'
import { select, text, withKnobs } from '@storybook/addon-knobs'

import { NavigationLinkType } from './NavigationLink.constants'
import NavigationLink from './NavigationLink.component'

const knobs = {
  mode: (defaultValue: NavigationLinkType) => select('mode', [NavigationLinkType.PRIMARY], defaultValue),
  to: (defaultValue: string) => text('to', defaultValue),
  name: (defaultValue: string) => text('name', defaultValue)
}

const renderComponent = (props = {}) => {
  const defaultProps = {
    mode: knobs.mode(NavigationLinkType.PRIMARY),
    to: knobs.to('/test-link'),
    name: knobs.name('Navigation link text'),
    linkProps: { to: '' }
  }

  return (
    <NavigationLink {...defaultProps} {...props}>
      {name}
    </NavigationLink>
  )
}

export default {
  title: 'Shared|NavigationLink'
}

export const Default = () => renderComponent()
