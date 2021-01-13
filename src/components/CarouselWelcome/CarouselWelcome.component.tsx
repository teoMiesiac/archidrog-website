import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Carousel from 'react-multi-carousel'
import Img from 'gatsby-image'
import { ButtonArrow, ButtonArrowDirection } from '~/components/ButtonArrow'
import { CarouselWrapper, ArrowWrapper, Mask } from './CarouselWelcome.styles'
import { responsive } from './CarouselWelcome.constants'
import { Breakpoint } from '~/styles/media'

export const query = graphql`
  query {
    file1: file(relativePath: { eq: "images/foto1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const CarouselWelcome = () => {
  const data = useStaticQuery(query)

  return (
    <CarouselWrapper>
      <Carousel
        responsive={responsive}
        ssr={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={6000}
        swipeable={true}
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
        removeArrowOnDeviceType={[Breakpoint.MOBILE, Breakpoint.TABLET]}
      >
        <Img fluid={data.file1.childImageSharp.fluid} alt="" />
        <Img fluid={data.file1.childImageSharp.fluid} alt="" />
        <Img fluid={data.file1.childImageSharp.fluid} alt="" />
        <Img fluid={data.file1.childImageSharp.fluid} alt="" />
      </Carousel>
      <Mask />
    </CarouselWrapper>
  )
}

export default CarouselWelcome
