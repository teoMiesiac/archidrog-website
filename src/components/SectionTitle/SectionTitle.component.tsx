import React from 'react'
import { Title } from './SectionTitle.styles'

interface Props {
  children: string
}

const SectionTitle = ({ children }: Props): JSX.Element => <Title>{children}</Title>

export default SectionTitle
