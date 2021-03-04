import React from 'react'
import { LayoutRoot } from '~/layouts/LayoutRoot'
import { LayoutMain } from '~/layouts/LayoutMain'
import '~/styles/global.css'
import config from 'react-reveal/globals'

config({ ssrFadeout: true })

const Layout = ({ children }): JSX.Element => (
  <LayoutRoot>
    <LayoutMain>{children}</LayoutMain>
  </LayoutRoot>
)

export default Layout
