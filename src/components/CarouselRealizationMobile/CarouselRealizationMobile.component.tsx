import React from 'react'
import Carousel from 'react-multi-carousel'
import { SubRealization } from '~/models'
import { Realization } from '~/components/Realization'
import { CarouselWrapper } from './CarouselRealizationMobile.styles'
import { responsive } from './CarouselRealizationMobile.constants'
import { Breakpoint } from '~/styles/media'

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
      removeArrowOnDeviceType={[
        Breakpoint.MOBILE,
        Breakpoint.TABLET,
        Breakpoint.DESKTOP,
        Breakpoint.DESKTOP_WIDE,
        Breakpoint.DESKTOP_FULL
      ]}
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
