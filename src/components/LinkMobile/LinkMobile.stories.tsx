import React from 'react'
import { select, text, withKnobs } from '@storybook/addon-knobs'
import { LinkMobileType } from './LinkMobile.constants'
import LinkMobile from './LinkMobile.component'

const knobs = {
  mode: (defaultValue: LinkMobileType) => select('mode', [LinkMobileType.PRIMARY], defaultValue),
  to: (defaultValue: string) => text('to', defaultValue),
  children: (defaultValue: string) => text('children', defaultValue)
}

const renderComponent = (props = {}) => {
  const defaultProps = {
    mode: knobs.mode(LinkMobileType.PRIMARY),
    to: knobs.to('/test-link'),
    children: knobs.children('Navigation link text'),
    linkProps: { to: '' }
  }

  return (
    <LinkMobile {...defaultProps} {...props}>
      {defaultProps.children}
    </LinkMobile>
  )
}

export default {
  title: 'Shared|LinkMobile',
  decorators: [withKnobs]
}

export const Default = () => renderComponent()
