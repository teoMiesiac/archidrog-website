import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { mapRealizationAndSubRealizationData } from '~/utils'
import CarouselRealizationDesktop from './CarouselRealizationDesktop.component'

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

const RenderComponent = () => {
  const data = useStaticQuery(query)
  const realizations = mapRealizationAndSubRealizationData(data)
  const defaultProps = {
    subRealizations: realizations[0].subRealizations,
    realizationTitle: 'Example title'
  }
  return <CarouselRealizationDesktop {...defaultProps} />
}

export default {
  title: 'Shared/CarouselRealizationDesktop'
}

export const Default = () => RenderComponent()
