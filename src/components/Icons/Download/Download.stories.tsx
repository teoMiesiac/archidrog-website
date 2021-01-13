import React from 'react'
import styled from 'styled-components'
import Download from './Download.component'

const IconWrapper = styled.div`
  width: 18px;
  height: 18px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <Download />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Download'
}

export const Default = () => renderComponent()
