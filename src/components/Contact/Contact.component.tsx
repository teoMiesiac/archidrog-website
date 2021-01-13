import React from 'react'
import { Flex, Box } from 'reflexbox/styled-components'
import { Color } from '~/styles/constants'
import { IconWrapper, CategoryTitle, BoldText } from './Contact.styles'
import { Address } from '~/components/Icons/Address'
import { Email } from '~/components/Icons/Email'
import { Fax } from '~/components/Icons/Fax'
import { Phone } from '~/components/Icons/Phone'
import { PhoneMobile } from '~/components/Icons/PhoneMobile'

import { contactDetails } from '../../../fixtures/contactDetails'
import { bossContactDetails } from '../../../fixtures/bossContactDetails'

const Contact = (): JSX.Element => {
  return (
    <Flex flexDirection={['column', 'row', 'row']} color={Color.PRIMARY}>
      <Flex flexDirection={['column']} mr={['0', '30px', '50px']}>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <IconWrapper>
            <Address />
          </IconWrapper>
          {contactDetails.address}
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <IconWrapper />
          {contactDetails.zipCode} {contactDetails.city}
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['20px', '20px']}>
          <IconWrapper>
            <Email />
          </IconWrapper>
          {contactDetails.email}
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <IconWrapper>
            <Phone />
          </IconWrapper>
          {contactDetails.phone}
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <IconWrapper>
            <Fax />
          </IconWrapper>
          {contactDetails.fax}
        </Box>
        <Box
          display="inline-box"
          verticalAlign="center"
          lineHeight="15px"
          fontSize="1.5rem"
          p={['35px 0 5px 0', '35px 0 8px 0']}
        >
          <CategoryTitle>NIP</CategoryTitle>&nbsp;
          {contactDetails.nip}
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <CategoryTitle>REGON</CategoryTitle>&nbsp;
          {contactDetails.regon}
        </Box>
      </Flex>
      <Flex flexDirection={['column']} marginTop={['10px', '0']}>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          Właściciel:
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <BoldText>
            {bossContactDetails.name} {bossContactDetails.surname}
          </BoldText>
        </Box>
        <Box
          display="inline-box"
          verticalAlign="center"
          lineHeight="15px"
          fontSize="1.5rem"
          p={['20px 0 5px 0', '20px 0 8px 0']}
        >
          <IconWrapper>
            <Phone />
          </IconWrapper>
          {bossContactDetails.companyPhoneNumber}
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <IconWrapper>
            <PhoneMobile />
          </IconWrapper>
          {bossContactDetails.phoneNumber}
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <IconWrapper>
            <Fax />
          </IconWrapper>
          {bossContactDetails.fax}
        </Box>
        <Box
          display="inline-box"
          verticalAlign="center"
          lineHeight="15px"
          fontSize="1.5rem"
          p={['25px 0 5px 0', '25px 0 8px 0']}
        >
          <IconWrapper>
            <Email />
          </IconWrapper>
          {bossContactDetails.email}
        </Box>
      </Flex>
    </Flex>
  )
}
export default Contact
