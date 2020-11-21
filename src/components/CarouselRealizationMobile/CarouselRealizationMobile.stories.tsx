import React from 'react'
import CarouselRealizationMobile from './CarouselRealizationMobile.component'
import { useStaticQuery, graphql } from 'gatsby'
import { mapRealizationAndSubRealizationData } from '~/utils'

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
    subRealizations: realizations[0].subRealizations
  }
  return <CarouselRealizationMobile {...defaultProps} />
}

export default {
  title: 'Shared/CarouselRealizationMobile'
}

export const Default = () => RenderComponent()
