import React, { useState } from 'react'
import Fade from 'react-reveal/Fade'

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
    <Wrapper marginTop={['15px', '15px', '30px']}>
      <Fade left duration={2000}>
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
      </Fade>
    </Wrapper>
  )
}

export default RealizationsMobile
