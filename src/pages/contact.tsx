import * as React from 'react'
import { Layout } from '~/layouts/Layout'
import { Contact } from '~/sections/Contact'
import { ContactForm } from '~/sections/ContactForm'

const IndexPage = () => (
  <Layout>
    <Contact />
    <ContactForm />
  </Layout>
)

export default IndexPage
