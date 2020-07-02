import React from 'react'
import { LayoutComponent } from './LayoutMain.styles'

const IndexLayout = ({ children }): JSX.Element => (
  <>
    <header />
    <LayoutComponent>{children}</LayoutComponent>
    <footer></footer>
  </>
)

export default IndexLayout
