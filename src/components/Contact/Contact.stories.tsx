import React from 'react'
import Contact from './Contact.component'

const renderComponent = (props = {}) => {
  const defaultProps = {}

  return <Contact {...defaultProps} {...props} />
}

export default {
  title: 'Shared/Contact'
}

export const Default = () => renderComponent()
