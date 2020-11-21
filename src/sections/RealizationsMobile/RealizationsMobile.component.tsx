import React from 'react'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { Realization as IRealization } from '~/models'
import { ExpansionPanel } from '~/components/ExpansionPanel'
import { Realization } from '~/components/Realization'

interface Props {
  realizations: IRealization[]
}

const RealizationsMobile = ({ realizations }: Props): JSX.Element => (
  <Section>
    <SectionTitle>Realizacje</SectionTitle>
    {realizations.map((realization, index) => (
      <ExpansionPanel key={index} header={realization.title}>
        <div>lol</div>
      </ExpansionPanel>
    ))}
  </Section>
)

export default RealizationsMobile
