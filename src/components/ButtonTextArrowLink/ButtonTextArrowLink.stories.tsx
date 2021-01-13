import React from 'react'
import styled from 'styled-components'
import { select, text, array, withKnobs } from '@storybook/addon-knobs'
import ButtonArrow from './ButtonTextArrowLink.component'
import { ButtonArrowType } from './ButtonTextArrowLink.constants'

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
      <ButtonArrow {...defaultProps} {...props} to="/" />
    </Background>
  )
}

export default {
  title: 'Shared/Button Text Arrow Link',
  decorators: [withKnobs]
}

export const Primary = () => renderComponent({ mode: knobs.mode(ButtonArrowType.PRIMARY) })
export const Secondary = () => renderComponent({ mode: knobs.mode(ButtonArrowType.SECONDARY) })
