import React from 'react'
import { Flex, Box } from 'reflexbox/styled-components'
import { Color } from '~/styles/constants'
import { IconWrapper, CategoryTitle } from './ContactFooter.styles'
import { Address } from '~/components/Icons/Address'
import { Email } from '~/components/Icons/Email'
import { Fax } from '~/components/Icons/Fax'
import { Phone } from '~/components/Icons/Phone'
import { contactDetails } from '../../../fixtures/contactDetails'

const ContactFooter = (): JSX.Element => {
  return (
    <Flex flexDirection={['column', 'row', 'row']} color={Color.WHITE}>
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
      </Flex>
      <Flex flexDirection={['column']} mr={['0', '30px', '50px']}>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
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
      </Flex>
      <Flex flexDirection={['column']}>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <CategoryTitle>NIP</CategoryTitle>&nbsp;
          {contactDetails.nip}
        </Box>
        <Box display="inline-box" verticalAlign="center" lineHeight="15px" fontSize="1.5rem" py={['5px', '8px']}>
          <CategoryTitle>REGON</CategoryTitle>&nbsp;
          {contactDetails.regon}
        </Box>
      </Flex>
    </Flex>
  )
}
export default ContactFooter
