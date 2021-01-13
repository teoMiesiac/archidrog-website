import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { parseReferenceData } from '~/utils'
import ReferenceTable from './ReferenceTable.component'

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

const RenderComponent = (props = {}): JSX.Element => {
  const data = useStaticQuery(query)
  const reference = parseReferenceData(data)
  const defaultProps = {
    data: reference
  }

  return <ReferenceTable {...defaultProps} {...props} />
}

export default {
  title: 'Shared/ReferenceTable'
}

export const Default = () => RenderComponent()
