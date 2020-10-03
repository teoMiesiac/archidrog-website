import React from 'react'
import styled from 'styled-components'
import Email from './Email.component'

const IconWrapper = styled.div`
  width: 17px;
  height: 15px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <Email />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Email'
}

export const Default = () => renderComponent()
