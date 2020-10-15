import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import { Offer as OfferInterface } from '~/models'
import { ButtonTextArrowLink, ButtonArrowType } from '~/components/ButtonTextArrowLink'
import { ButtonWrapper, Wrapper, TitleMobile, Title, SubOfferList, SubOffer, SubOfferLink } from './Offer.styles'

const Offer = ({ title, link, subOffers }: OfferInterface): JSX.Element => (
  <Wrapper padding={['10px 20px']}>
    {subOffers ? (
      <Flex flexDirection="column" width="100%">
        <Title>{title}</Title>
        <SubOfferList>
          {subOffers.map(subOffer => (
            <SubOffer key={subOffer.title}>
              <SubOfferLink to={subOffer.link}>{subOffer.title}</SubOfferLink>
            </SubOffer>
          ))}
        </SubOfferList>
      </Flex>
    ) : (
      <>
        <TitleMobile to={link} display={['initial', 'initial', 'none']}>
          {title}
        </TitleMobile>
        <Title
          flexDirection="row"
          flexWrap="nowrap"
          width="100%"
          alignItems="center"
          justifyContent="space-between"
          display={['none', 'none', 'flex']}
          minHeight={[0, 0, 48]}
        >
          <span>{title}</span>
          {link && (
            <ButtonWrapper>
              <ButtonTextArrowLink
                to={link}
                text="SPRAWDŹ REALIZACJE"
                fontSize={['1.4rem']}
                mode={ButtonArrowType.SECONDARY}
              />
            </ButtonWrapper>
          )}
        </Title>
      </>
    )}
  </Wrapper>
)

export default Offer
