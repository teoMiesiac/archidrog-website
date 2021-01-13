import React from 'react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Offer from './Offer.component'

const knobs = {
  title: (defaultValue: string) => text('title', defaultValue),
  link: (defaultValue: string) => text('link', defaultValue)
}

const subOffers = [
  {
    title: 'wub offer1',
    link: '/sub1'
  },
  {
    title: 'sub offer1',
    link: '/sub2'
  },
  {
    title: 'sub offer1',
    link: '/sub3'
  }
]

const renderComponent = (props = {}) => {
  const defaultProps = {
    title: knobs.title(
      'Wykonanie kompleksowej dokumentacji aplikacyjnej, służącej pozyskiwaniu środkópejskiej, w tym:'
    ),
    link: knobs.link('/link')
  }

  return <Offer {...defaultProps} {...props} />
}

export default {
  title: 'Shared/Offer',
  decorators: [withKnobs]
}

export const Default = () => renderComponent()
export const SubOffer = () => renderComponent({ subOffers })
