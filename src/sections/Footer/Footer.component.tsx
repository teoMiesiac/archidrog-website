import React from 'react'
import { FooterWrapper } from './Footer.styles'
import { Flex } from 'reflexbox/styled-components'
import { ArchidrogLogo } from '~/components/ArchidrogLogo'

const Footer = (): JSX.Element => (
  <FooterWrapper>
    <Flex>
      <ArchidrogLogo wMobile={131} />
    </Flex>
  </FooterWrapper>
)

export default Footer
