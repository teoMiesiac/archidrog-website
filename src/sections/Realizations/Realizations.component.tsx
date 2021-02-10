import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex } from 'reflexbox/styled-components'
import { mapRealizationAndSubRealizationData } from '~/utils'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { RealizationsMobile } from '~/sections/RealizationsMobile'
import { RealizationsDesktop } from '~/sections/RealizationsDesktop'

const query = graphql`
  query {
    subRealizations: allMarkdownRemark(filter: { frontmatter: { type: { eq: "sub-realization" } } }) {
      edges {
        node {
          frontmatter {
            title
            sub_realizations
            images {
              id
              childImageSharp {
                fluid(maxWidth: 800, maxHeight: 600) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            bullet_points
          }
        }
      }
    }
    realizations: allMarkdownRemark(filter: { frontmatter: { type: { eq: "realization" } } }) {
      edges {
        node {
          frontmatter {
            title
            sub_realizations
          }
        }
      }
    }
  }
`

const Realizations = (): JSX.Element => {
  const data = useStaticQuery(query)
  const realizations = mapRealizationAndSubRealizationData(data)
  return (
    <Section>
      <Flex
        flexDirection={['column']}
        flexWrap="nowrap"
        px={[15, 30]}
        py={[20, 30, 50]}
        maxWidth={1480}
        width="100%"
        justifyContent={['', 'space-between']}
      >
        <SectionTitle>Realizacje</SectionTitle>
        <RealizationsMobile realizations={realizations} />
        <RealizationsDesktop realizations={realizations} />
      </Flex>
    </Section>
  )
}
export default Realizations
