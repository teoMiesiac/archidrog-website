export interface Offer {
  title: string
  link?: string
  subOffers?: SubOffer[]
}

export interface SubOffer {
  title: string
  link: string
}
