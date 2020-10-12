import React from 'react'
import { SectionTitle } from '~/components/SectionTitle'
import { SectionWrapper } from './Section.styles'
interface Props {
  title?: string
  children: React.ReactNode
}

const Section = ({ title, children }: Props): JSX.Element => (
  <SectionWrapper>
    {title && <SectionTitle>{title}</SectionTitle>}
    {children}
  </SectionWrapper>
)

export default Section
