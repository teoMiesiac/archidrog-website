import React from 'react'
import styled from 'styled-components'
import Close from './Close.component'

const IconWrapper = styled.div`
  width: 15px;
  height: 14px;
  background-color: black;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <Close />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Close'
}

export const Default = () => renderComponent()
