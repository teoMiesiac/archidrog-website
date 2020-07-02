import React from 'react'
import { LayoutRoot } from '~layouts/LayoutRoot'
import { LayoutMain } from '~layouts/LayoutMain'

const Layout = ({ children }): JSX.Element => (
  <LayoutRoot>
    <LayoutMain>{children}</LayoutMain>
  </LayoutRoot>
)

export default Layout
