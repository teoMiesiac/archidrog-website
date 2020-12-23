import React from 'react'
import styled from 'styled-components'
import ArrowDown from './ArrowDown.component'

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <ArrowDown />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Arrow Down'
}

export const Default = () => renderComponent()
