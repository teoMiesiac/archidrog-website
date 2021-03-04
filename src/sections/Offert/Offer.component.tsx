import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import Fade from 'react-reveal/Fade'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Section } from '~/components/Section'
import { Offer as SingleOffer } from '~/components/Offer'
import { SectionTitle } from '~/components/SectionTitle'
import { SubTitle, Bold, BackgroundMask } from './Offer.styles'
import { offers } from '../../../fixtures/offers'

export const query = graphql`
  query {
    file1: file(relativePath: { eq: "images/foto1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3543, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Offer = (): JSX.Element => {
  const data = useStaticQuery(query)

  return (
    <ParallaxBanner
      layers={[
        {
          children: <Img fluid={data.file1.childImageSharp.fluid} style={{ height: '100%' }} />,
          amount: 0.3
        },
        { children: <BackgroundMask />, amount: 0 }
      ]}
      style={{
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <Section>
        <Flex
          flexDirection={['column', 'column']}
          flexWrap="nowrap"
          px={[15, 30]}
          py={[20, 30, 150]}
          maxWidth={1480}
          width="100%"
          justifyContent={['', 'space-between']}
        >
          <SectionTitle>Oferta</SectionTitle>
          <SubTitle margin={['20px 0']}>
            <Bold>Pracownia Projektowa ARCHIDROG</Bold> świadczy usługi w branży drogowej i mostowej w zakresie:
          </SubTitle>
          <Fade left>
            {offers.map(offer => (
              <SingleOffer key={offer.title} title={offer.title} link={offer.link} subOffers={offer.subOffers} />
            ))}
          </Fade>
        </Flex>
      </Section>
    </ParallaxBanner>
  )
}

export default Offer
