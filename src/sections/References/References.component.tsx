import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex } from 'reflexbox/styled-components'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { ReferenceTable } from '~/components/ReferenceTable'
import { parseReferenceData } from '~/utils'

const query = graphql`
  query {
    data: allMarkdownRemark(filter: { frontmatter: { type: { eq: "references" } } }) {
      edges {
        node {
          frontmatter {
            investor
            scope_of_work
            file {
              relativePath
            }
            scopes_of_work {
              file {
                relativePath
              }
              scope_of_work
            }
          }
        }
      }
    }
  }
`

const References = (): JSX.Element => {
  const data = useStaticQuery(query)
  const reference = parseReferenceData(data)

  return (
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
        <SectionTitle>Referencje</SectionTitle>
        <ReferenceTable data={reference} />
      </Flex>
    </Section>
  )
}

export default References
