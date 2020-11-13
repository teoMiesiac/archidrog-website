import * as React from 'react'
import { Layout } from '~/layouts/Layout'
import { useStaticQuery, graphql } from 'gatsby'

export const query = graphql`
  query {
    file1: file(relativePath: { eq: "images/foto1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 800, maxHeight: 600) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const IndexPage = () => {
  const data = useStaticQuery(query)
  console.log(data)
  return <Layout>lol</Layout>
}

export default IndexPage
