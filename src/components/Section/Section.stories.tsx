import React from 'react'
import Section from './Section.component'
import { text, withKnobs } from '@storybook/addon-knobs'

const knobs = {
  title: (defaultValue: string) => text('title', defaultValue)
}
const renderComponent = (props = {}) => {
  const defaultProps = {
    title: knobs.title('Section Title')
  }
  return (
    <Section {...defaultProps} {...props}>
      <div>section content</div>
    </Section>
  )
}

export default {
  title: 'Shared/Section',
  decorators: [withKnobs]
}

export const Default = () => renderComponent()
