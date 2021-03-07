import * as React from 'react'
import { WelcomeSection } from '~/sections/WelcomeSection'
import { WhoWeAreSection } from '~/sections/WhoWeAreSection'
import { Offer } from '~/sections/Offert'
import { Realizations } from '~/sections/Realizations'
import { References } from '~/sections/References'
import { Contact } from '~/sections/Contact'
import { ContactForm } from '~/sections/ContactForm'
import { AboutCompany } from '~/sections/AboutCompany'

const IndexPage = () => (
  <>
    <WelcomeSection />
    <WhoWeAreSection />
    <AboutCompany />
    <Offer />
    <Realizations />
    <References />
    <Contact />
    <ContactForm />
  </>
)

export default IndexPage
