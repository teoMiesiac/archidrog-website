import React from 'react'
import { SectionTitle } from '~/components/SectionTitle'
import { SectionWrapper } from './Section.styles'
interface Props {
  title?: string
  id?: string
  children: React.ReactNode
  style?: React.CSSProperties
}

const Section = ({ title, id, children, style }: Props): JSX.Element => (
  <SectionWrapper id={id} style={style}>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionWrapper>
)

export default Section
