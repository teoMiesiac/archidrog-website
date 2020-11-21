import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Realizations from './RealizationsMobile.component'
import { mapRealizationAndSubRealizationData } from '~/utils'

export const query = graphql`
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

const RenderComponent = (props = {}) => {
  const data = useStaticQuery(query)
  const realizations = mapRealizationAndSubRealizationData(data)
  const defaultProps = {
    realizations
  }
  return <Realizations {...defaultProps} {...props} />
}

export default {
  title: 'Sections/Realizations'
}

export const Default = () => RenderComponent()
