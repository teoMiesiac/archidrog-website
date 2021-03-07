import React from 'react'
import LayoutRoot from './src/layouts/Layout/Layout.component'

export const wrapRootElement = ({ element }) => <LayoutRoot>{element}</LayoutRoot>

export const wrapPageElement = ({ element }) => <>{element}</>
