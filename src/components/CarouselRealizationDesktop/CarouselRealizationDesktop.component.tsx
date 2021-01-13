import React from 'react'
import Carousel from 'react-multi-carousel'
import { SubRealization } from '~/models'
import { Realization } from '~/components/Realization'
import { responsive } from './CarouselRealizationDesktop.constants'
import { CarouselWrapper, ArrowWrapper, Title } from './CarouselRealizationDesktop.styles'
import { ButtonArrow, ButtonArrowDirection, ButtonArrowType } from '~/components/ButtonArrow'

interface Props {
  subRealizations: SubRealization[]
  realizationTitle: string
}

const ArrowLeft = props => {
  return (
    <>
      <Title top={['6px']} left={['390px']}>
        {props.title}
      </Title>
      <ArrowWrapper top={['0px']} right={['56px']}>
        <ButtonArrow
          onClick={() => props.onClick()}
          mode={ButtonArrowType.SECONDARY}
          direction={ButtonArrowDirection.LEFT}
        />
      </ArrowWrapper>
    </>
  )
}

const CarouselRealizationDesktop = ({ subRealizations, realizationTitle }: Props): JSX.Element => (
  <CarouselWrapper>
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      swipeable={true}
      showDots={true}
      customLeftArrow={<ArrowLeft title={realizationTitle} />}
      customRightArrow={
        <ArrowWrapper top={['0px']} right={['0px']}>
          <ButtonArrow mode={ButtonArrowType.SECONDARY} direction={ButtonArrowDirection.RIGHT} />
        </ArrowWrapper>
      }
    >
      {subRealizations.map(subRealization => (
        <Realization
          key={subRealization.title}
          title={subRealization.title}
          bulletPoints={subRealization.bullet_points}
          images={subRealization.images}
        />
      ))}
    </Carousel>
  </CarouselWrapper>
)

export default CarouselRealizationDesktop
