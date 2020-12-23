import React from 'react'
import styled from 'styled-components'
import { select, text, array, withKnobs } from '@storybook/addon-knobs'
import ButtonDownload from './ButtonDownload.component'
import { ButtonDownloadType } from './ButtonDownload.constants'

const knobs = {
  mode: (defaultValue: ButtonDownloadType) =>
    select('mode', [ButtonDownloadType.PRIMARY, ButtonDownloadType.SECONDARY], defaultValue),
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
    mode: knobs.mode(ButtonDownloadType.PRIMARY),
    href: '/files/file.pdf',
    fontSize: ['1.4rem', '1.4rem', '1.6rem']
  }

  return (
    <Background>
      <ButtonDownload {...defaultProps} {...props} />
    </Background>
  )
}

export default {
  title: 'Shared/ButtonDownload',
  decorators: [withKnobs]
}

export const Primary = () => renderComponent({ mode: knobs.mode(ButtonDownloadType.PRIMARY) })
export const Secondary = () => renderComponent({ mode: knobs.mode(ButtonDownloadType.SECONDARY) })
