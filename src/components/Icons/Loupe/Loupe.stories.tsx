import React from 'react'
import styled from 'styled-components'
import Loupe from './Loupe.component'

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <Loupe />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Loupe'
}

export const Default = () => renderComponent()
