import React from 'react'
import Carousel from 'react-multi-carousel'
import { SubRealization } from '~/models'
import { ButtonArrow, ButtonArrowDirection } from '~/components/ButtonArrow'
import { Realization } from '~/components/Realization'
import { CarouselWrapper, ArrowWrapper } from './CarouselRealizationMobile.styles'
import { responsive } from './CarouselRealizationMobile.constants'

interface Props {
  subRealizations: SubRealization[]
}

const CarouselRealizationMobile = ({ subRealizations }: Props): JSX.Element => (
  <CarouselWrapper>
    <Carousel
      responsive={responsive}
      ssr={true}
      infinite={true}
      swipeable={true}
      showDots={true}
      customLeftArrow={
        <ArrowWrapper bottom={['16px']} left={['16px']}>
          <ButtonArrow direction={ButtonArrowDirection.LEFT} />
        </ArrowWrapper>
      }
      customRightArrow={
        <ArrowWrapper bottom={['16px']} left={['72px']}>
          <ButtonArrow direction={ButtonArrowDirection.RIGHT} />
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

export default CarouselRealizationMobile
