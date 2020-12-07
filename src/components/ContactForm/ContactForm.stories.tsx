import React from 'react'
import ContactForm from './ContactForm.component'

const renderComponent = (props = {}) => {
  const defaultProps = {}

  return <ContactForm {...defaultProps} {...props} />
}

export default {
  title: 'Shared/ContactForm'
}

export const Default = () => renderComponent()
