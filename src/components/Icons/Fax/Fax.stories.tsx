import React from 'react'
import styled from 'styled-components'
import Fax from './Fax.component'

const IconWrapper = styled.div`
  width: 17px;
  height: 15px;
`

const renderComponent = () => {
  return (
    <IconWrapper>
      <Fax />
    </IconWrapper>
  )
}

export default {
  title: 'Icon/Fax'
}

export const Default = () => renderComponent()
