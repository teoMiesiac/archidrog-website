import React from 'react'
import styled from 'styled-components'
import PhoneMobile from './PhoneMobile.component'

const IconWrapper = styled.div`
  width: 17px;
  height: 15px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <PhoneMobile />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/PhoneMobile'
}

export const Default = () => renderComponent()
