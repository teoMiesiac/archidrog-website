import React from 'react'
import styled from 'styled-components'
import Address from './Address.component'

const IconWrapper = styled.div`
  width: 17px;
  height: 15px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <Address />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Address'
}

export const Default = () => renderComponent()
