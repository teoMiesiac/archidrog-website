import React from 'react'
import styled from 'styled-components'
import ArrowLong from './ArrowLong.component'

const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <ArrowLong />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Arrow Long'
}

export const Default = () => renderComponent()
