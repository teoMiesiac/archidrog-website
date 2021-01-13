import React from 'react'
import styled from 'styled-components'
import ArrowRightSmall from './ArrowRightSmall.component'

const IconWrapper = styled.div`
  width: 15px;
  height: 14px;
  background-color: black;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <ArrowRightSmall />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Arrow Right Small'
}

export const Default = () => renderComponent()
