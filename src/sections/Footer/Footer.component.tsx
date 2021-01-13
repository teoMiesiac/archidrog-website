import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { FooterWrapper } from './Footer.styles'
import { Flex, Box } from 'reflexbox/styled-components'
import { ArchidrogLogo } from '~/components/ArchidrogLogo'
import { ContactFooter } from '~/components/ContactFooter'

export const query = graphql`
  query {
    file1: file(relativePath: { eq: "images/footer-background.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3543) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Footer = (): JSX.Element => {
  const data = useStaticQuery(query)

  return (
    <FooterWrapper Tag="footer" fluid={data.file1.childImageSharp.fluid}>
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
}

export default Footer
