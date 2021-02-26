import React from 'react'
import { LayoutComponent } from './LayoutMain.styles'
import { Header } from '~/sections/Header/'
import { Footer } from '~/sections/Footer'
import { WelcomeSection } from '~/sections/WelcomeSection'

const IndexLayout = ({ children }): JSX.Element => (
  <>
    <Header />
    <WelcomeSection />
    <LayoutComponent>{children}</LayoutComponent>
    <Footer />
  </>
)

export default IndexLayout
