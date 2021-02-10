import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import { Offer as OfferInterface } from '~/models'
import { ButtonTextArrowLink, ButtonArrowType } from '~/components/ButtonTextArrowLink'
import { ArrowRight } from '~/components/Icons/ArrowRight'
import {
  ButtonWrapper,
  Wrapper,
  TitleMobile,
  Title,
  SubOfferList,
  SubOffer,
  SubOfferLink,
  IconWrapper,
  IconWrapperSubOffer
} from './Offer.styles'

const Offer = ({ title, link, subOffers }: OfferInterface): JSX.Element => (
  <Wrapper padding={['10px 20px']}>
    {subOffers ? (
      <Flex flexDirection="column" width="100%">
        <Title>{title}</Title>
        <SubOfferList>
          {subOffers.map(subOffer => (
            <SubOffer key={subOffer.title}>
              <SubOfferLink to={subOffer.link}>
                <span>{subOffer.title}</span>
                <IconWrapperSubOffer>
                  <ArrowRight />
                </IconWrapperSubOffer>
              </SubOfferLink>
            </SubOffer>
          ))}
        </SubOfferList>
      </Flex>
    ) : (
      <>
        <TitleMobile to={link} display={['flex', 'flex', 'none']}>
          <span>{title}</span>
          <IconWrapper>
            <ArrowRight />
          </IconWrapper>
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
                fontWeight={['500']}
                padding={['12px 15px']}
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
