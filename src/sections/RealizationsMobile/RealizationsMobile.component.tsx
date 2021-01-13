import React, { useState } from 'react'
import { Realization as IRealization } from '~/models'
import { ExpansionPanel } from '~/components/ExpansionPanel'
import { CarouselRealizationMobile } from '~/components/CarouselRealizationMobile'
import { Wrapper } from './RealizationsMobile.styles'
interface Props {
  realizations: IRealization[]
}

const RealizationsMobile = ({ realizations }: Props): JSX.Element => {
  const [activeExpansionPanel, setActiveExpansionPanel] = useState('')

  const onAccordionClick = (name: string) => {
    setActiveExpansionPanel(name)
  }

  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default RealizationsMobile
