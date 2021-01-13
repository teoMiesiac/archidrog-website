import React from 'react'
import styled from 'styled-components'
import { select, withKnobs } from '@storybook/addon-knobs'
import ButtonArrow from './ButtonArrow.component'
import { ButtonArrowType, ButtonArrowDirection } from './ButtonArrow.constants'

const knobs = {
  mode: (defaultValue: ButtonArrowType) =>
    select('mode', [ButtonArrowType.PRIMARY, ButtonArrowType.SECONDARY], defaultValue),
  direction: (defaultValue: ButtonArrowDirection) =>
    select('direction', [ButtonArrowDirection.RIGHT, ButtonArrowDirection.LEFT], defaultValue)
}

const Background = styled.div`
  background-color: grey;
  padding: 10px;
  height: 100px;
`

const renderComponent = (props = {}) => {
  const defaultProps = {
    mode: knobs.mode(ButtonArrowType.PRIMARY),
    direction: knobs.direction(ButtonArrowDirection.RIGHT)
  }

  return (
    <Background>
      <ButtonArrow {...defaultProps} {...props} />
    </Background>
  )
}

export default {
  title: 'Shared/ButtonArrow',
  decorators: [withKnobs]
}
export const Default = () => renderComponent()
export const Primary = () => renderComponent({ mode: ButtonArrowType.PRIMARY })
export const Secondary = () => renderComponent({ mode: ButtonArrowType.SECONDARY })
export const SecondaryDirection = () => renderComponent({ direction: ButtonArrowDirection.LEFT })
