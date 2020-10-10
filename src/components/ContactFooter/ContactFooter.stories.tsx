import React from 'react'
import ContactFooter from './ContactFooter.component'

const renderComponent = (props = {}) => {
  const defaultProps = {}

  return <ContactFooter {...defaultProps} {...props} />
}

export default {
  title: 'Shared/ContactFooter'
}

export const Default = () => renderComponent()
