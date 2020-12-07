import React from 'react'
import styled from 'styled-components'
import Map from './Map.component'

const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  display: flex;
`

const renderComponent = () => {
  return (
    <Wrapper>
      <Map />
    </Wrapper>
  )
}

export default {
  title: 'Shared/Map'
}

export const Default = () => renderComponent()
