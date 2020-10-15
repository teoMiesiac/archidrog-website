import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import { Section } from '~/components/Section'
import { Offer as SingleOffer } from '~/components/Offer'
import { SectionTitle } from '~/components/SectionTitle'
import { SubTitle, Bold } from './Offer.styles'
import { offers } from '../../../fixtures/offers'

const Offer = (): JSX.Element => (
  <Section>
    <Flex
      flexDirection={['column', 'column']}
      flexWrap="nowrap"
      px={[15, 30]}
      py={[20, 30, 50]}
      maxWidth={1480}
      width="100%"
      justifyContent={['', 'space-between']}
    >
      <SectionTitle>Oferta</SectionTitle>
      <SubTitle margin={['20px 0']}>
        <Bold>Pracownia Projektowa ARCHIDROG</Bold> świadczy usługi w branży drogowej i mostowej w zakresie:
      </SubTitle>
      {offers.map(offer => (
        <SingleOffer key={offer.title} title={offer.title} link={offer.link} subOffers={offer.subOffers} />
      ))}
    </Flex>
  </Section>
)

export default Offer
