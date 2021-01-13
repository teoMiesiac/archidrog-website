import React from 'react'
import styled from 'styled-components'
import { select, text, array, withKnobs } from '@storybook/addon-knobs'
import ButtonPreview from './ButtonPreview.component'
import { ButtonPreviewType } from './ButtonPreview.constants'

const knobs = {
  mode: (defaultValue: ButtonPreviewType) =>
    select('mode', [ButtonPreviewType.PRIMARY, ButtonPreviewType.SECONDARY], defaultValue),
  href: (defaultValue: string) => text('text', defaultValue),
  fontSize: (defaultValue: string[]) => array('fontSize', defaultValue)
}

const Background = styled.div`
  background-color: grey;
  padding: 10px;
  height: 100px;
`

const renderComponent = (props = {}) => {
  const defaultProps = {
    mode: knobs.mode(ButtonPreviewType.PRIMARY),
    href: '/files/file.pdf',
    fontSize: ['1.4rem', '1.4rem', '1.6rem']
  }

  return (
    <Background>
      <ButtonPreview {...defaultProps} {...props} />
    </Background>
  )
}

export default {
  title: 'Shared/ButtonPreview',
  decorators: [withKnobs]
}

export const Primary = () => renderComponent({ mode: knobs.mode(ButtonPreviewType.PRIMARY) })
export const Secondary = () => renderComponent({ mode: knobs.mode(ButtonPreviewType.SECONDARY) })
