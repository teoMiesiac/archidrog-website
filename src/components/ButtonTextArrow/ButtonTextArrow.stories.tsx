import React from 'react'
import styled from 'styled-components'
import { select, text, array, withKnobs } from '@storybook/addon-knobs'
import ButtonTextArrow from './ButtonTextArrow.component'
import { ButtonArrowType } from './ButtonTextArrow.constants'

const knobs = {
  mode: (defaultValue: ButtonArrowType) =>
    select('mode', [ButtonArrowType.PRIMARY, ButtonArrowType.SECONDARY], defaultValue),
  text: (defaultValue: string) => text('text', defaultValue),
  fontSize: (defaultValue: string[]) => array('fontSize', defaultValue)
}

const Background = styled.div`
  background-color: grey;
  padding: 10px;
  height: 100px;
`

const renderComponent = (props = {}) => {
  const defaultProps = {
    mode: knobs.mode(ButtonArrowType.PRIMARY),
    text: 'Example text',
    fontSize: ['1.4rem', '1.4rem', '1.6rem']
  }

  return (
    <Background>
      <ButtonTextArrow {...defaultProps} {...props} />
    </Background>
  )
}

export default {
  title: 'Shared/ButtonTextArrow',
  decorators: [withKnobs]
}

export const Primary = () => renderComponent({ mode: knobs.mode(ButtonArrowType.PRIMARY) })
export const Secondary = () => renderComponent({ mode: knobs.mode(ButtonArrowType.SECONDARY) })
