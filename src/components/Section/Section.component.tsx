import React from 'react'
import { SectionWrapper, SectionTitle } from './Section.styles'

interface Props {
  title?: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props): JSX.Element => (
  <SectionWrapper>
    <SectionTitle>{title}</SectionTitle>
    {children}
  </SectionWrapper>
)

export default Section
