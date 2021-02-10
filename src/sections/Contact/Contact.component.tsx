import React from 'react'
import { Flex } from 'reflexbox/styled-components'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { Map } from '~/components/Map'
import { Contact as ContactInformations } from '~/components/Contact'
import { Subtitle } from './Contact.styles'

const Contact = (): JSX.Element => (
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
      <SectionTitle>O firmie</SectionTitle>
      <Flex flexDirection={['column-reverse', 'column-reverse', 'row']}>
        <Flex
          flexDirection="column"
          padding={['10px', '20px', '30px']}
          marginBottom={['20px', '0']}
          marginRight={['0', '0', '15px']}
          justifyContent="flex-start"
          flex="1"
        >
          <Subtitle marginBottom={[10, 10, 30]}>
            Pracownia Projektowa <span>ARCHIDROG</span>
          </Subtitle>
          <ContactInformations />
        </Flex>
        <Flex
          flexDirection="column"
          height={['300px', '500px', '420px']}
          padding={['10px', '20px', '30px']}
          marginBottom={['20px', '0']}
          justifyContent="space-between"
          flex="1"
        >
          <Map />
        </Flex>
      </Flex>
    </Flex>
  </Section>
)

export default Contact
