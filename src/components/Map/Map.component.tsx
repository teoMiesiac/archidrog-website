import React from 'react'
import { Wrapper } from './Map.styles'

const Map = (): JSX.Element => {
  return (
    // Important! Always set the container height explicitly
    <Wrapper>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3594.7429787384604!2d16.895934315197124!3d52.40485821605879!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x402a12b084aa5032!2sPracownia%20Projektowa%20ARCHIDROG%20Witold%20Orczy%C5%84ski!5e0!3m2!1spl!2spl!4v1606940839086!5m2!1spl!2spl"
        width="100%"
        height="100%"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen={false}
        aria-hidden="false"
        tabIndex={0}
      ></iframe>
    </Wrapper>
  )
}

export default Map
