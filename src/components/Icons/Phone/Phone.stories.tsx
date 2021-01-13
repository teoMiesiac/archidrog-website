import React from 'react'
import styled from 'styled-components'
import Phone from './Phone.component'

const IconWrapper = styled.div`
  width: 17px;
  height: 15px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <Phone />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Phone'
}

export const Default = () => renderComponent()
