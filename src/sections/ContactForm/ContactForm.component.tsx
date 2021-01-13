import React from 'react'
import { Flex, Box } from 'reflexbox/styled-components'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { ContactForm as Form } from '~/components/ContactForm'

const ContactForm = (): JSX.Element => (
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
      <SectionTitle>Formularz kontaktowy</SectionTitle>
      <Flex flexDirection={['row']} justifyContent="flex-start">
        <Box width={['100%', '100%', '50%']}>
          <Form />
        </Box>
      </Flex>
    </Flex>
  </Section>
)

export default ContactForm
