import React from 'react'
import styled from 'styled-components'
import ArrowRight from './ArrowRight.component'

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <ArrowRight />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Arrow Right'
}

export const Default = () => renderComponent()
