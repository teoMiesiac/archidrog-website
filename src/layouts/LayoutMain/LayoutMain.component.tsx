import React from 'react'
import { LayoutComponent } from './LayoutMain.styles'
import { Header } from '~/sections/Header/'
import { Footer } from '~/sections/Footer'

const IndexLayout = ({ children }): JSX.Element => (
  <>
    <Header />
    <LayoutComponent>{children}</LayoutComponent>
    <Footer />
  </>
)

export default IndexLayout
