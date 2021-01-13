import { GatsbyImageProps, FluidObject } from 'gatsby-image'
export interface Realization {
  title: string
  subRealizations: SubRealization[]
}

export interface SubRealization {
  title: string
  bullet_points: string[]
  images: ImageSubRealization[]
}

export interface ImageSubRealization {
  childImageSharp: { fluid: FluidObject }
  id: string
}
