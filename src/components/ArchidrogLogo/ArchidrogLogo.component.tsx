import React from 'react'
import Img from 'gatsby-image'
import { graphql, useStaticQuery } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { ArchidrogLogoType } from './ArchidrogLogo.constants'
import { ImageWrapper } from './ArchidrogLogo.styles'

export const query = graphql`
  query {
    LogoOnWhite: file(relativePath: { eq: "images/archidrog-logo-color-onwhite.png" }) {
      childImageSharp {
        fluid(maxWidth: 392, maxHeight: 210) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    LogoOnDark: file(relativePath: { eq: "images/archidrog-logo-color-ondark.png" }) {
      childImageSharp {
        fluid(maxWidth: 392, maxHeight: 210) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

interface Props {
  mode?: ArchidrogLogoType
  wMobile: number
  wTablet?: number
  wDesktop?: number
  wDesktopWide?: number
  wDesktopFull?: number
}

const ArchidrogLogo = ({
  mode = ArchidrogLogoType.PRIMARY,
  wMobile,
  wTablet,
  wDesktop,
  wDesktopWide,
  wDesktopFull
}: Props) => {
  const data = useStaticQuery(query)

  return (
    <ThemeProvider theme={{ mode }}>
      <ImageWrapper
        wMobile={wMobile}
        wTablet={wTablet}
        wDesktop={wDesktop}
        wDesktopWide={wDesktopWide}
        wDesktopFull={wDesktopFull}
      >
        <Img
          fluid={
            mode === ArchidrogLogoType.PRIMARY
              ? data.LogoOnDark.childImageSharp.fluid
              : data.LogoOnWhite.childImageSharp.fluid
          }
          alt="archidrog logo"
        />
      </ImageWrapper>
    </ThemeProvider>
  )
}

export default ArchidrogLogo
