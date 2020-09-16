import React from 'react'
import { Flex, Box } from 'reflexbox/styled-components'
import { contactDetails } from '../../../fixtures/contactDetails'

const ContactFooter = (): JSX.Element => (
  <Flex flexDirection={['column', 'column', 'row']}>
    <Flex flexDirection={['column']}>
      <Box>{contactDetails.address}</Box>
      <Box>
        {contactDetails.zipCode} {contactDetails.city}
      </Box>
    </Flex>
    <Flex flexDirection={['column']}>
      <Box>{contactDetails.email}</Box>
      <Box>{contactDetails.phone}</Box>
      <Box>{contactDetails.fax}</Box>
    </Flex>
    <Flex flexDirection={['column']}>
      <Box>{contactDetails.nip}</Box>
      <Box>{contactDetails.regon}</Box>
    </Flex>
    <Flex flexDirection={['column']}>lol2</Flex>
  </Flex>
)

export default ContactFooter
