import React from 'react'
import { FooterWrapper } from './Footer.styles'
import { Flex, Box } from 'reflexbox/styled-components'
import { ArchidrogLogo } from '~/components/ArchidrogLogo'
import { ContactFooter } from '~/components/ContactFooter'

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <Flex
      flexDirection={['column', 'row']}
      justifyContent={['', 'space-between']}
      width="100%"
      px={[15, 30]}
      py={[20, 30, 50]}
      maxWidth={1480}
    >
      <Box pb={['20px']}>
        <ArchidrogLogo wMobile={131} />
      </Box>
      <ContactFooter />
    </Flex>
  </FooterWrapper>
)

export default Footer
