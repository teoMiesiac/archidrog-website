import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Realization from './Realization.component'

const query = graphql`
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
const Container = styled.div`
  padding-top: 100px;
`

const RenderComponent = (props = {}): JSX.Element => {
  const data = useStaticQuery(query)
  const defaultProps = {
    images: [data.file1.childImageSharp.fluid, data.file1.childImageSharp.fluid, data.file1.childImageSharp.fluid],
    title: 'Budowa trasy średnicowej etap II – od ul. Droga Łąkowa do węzła A-1 „Grudziądz” – odcinek 3',
    bulletPoints: [
      'Długość wybudowanej drogi obwodowej: 2,727 km',
      'Długość przebudowanej drogi nr 55: 0,426 km',
      'Liczba obiektów inżynierskich : 2 szt.',
      'Wartość inwestycji: 55 019 919,37 zł'
    ]
  }

  return (
    <Container>
      <Realization {...defaultProps} {...props} />
    </Container>
  )
}

export default {
  title: 'Shared/Realization'
}

export const Default = () => RenderComponent()
