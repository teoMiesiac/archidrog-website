import React, { useState } from 'react'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { Realization as IRealization } from '~/models'
import { ExpansionPanel } from '~/components/ExpansionPanel'
import { CarouselRealizationMobile } from '~/components/CarouselRealizationMobile'
interface Props {
  realizations: IRealization[]
}

const RealizationsMobile = ({ realizations }: Props): JSX.Element => {
  const [activeExpansionPanel, setActiveExpansionPanel] = useState('')

  const onAccordionClick = (name: string) => {
    setActiveExpansionPanel(name)
  }

  return (
    <Section>
      <SectionTitle>Realizacje</SectionTitle>
      {realizations.map((realization, index) => (
        <ExpansionPanel
          key={index}
          header={realization.title}
          onClick={() => onAccordionClick(realization.title)}
          active={activeExpansionPanel === realization.title}
        >
          <CarouselRealizationMobile subRealizations={realization.subRealizations} />
        </ExpansionPanel>
      ))}
    </Section>
  )
}

export default RealizationsMobile
