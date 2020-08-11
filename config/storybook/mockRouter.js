import { useState } from 'react'
import Router from 'next/router'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { action } from '@storybook/addon-actions'

function RouterMock({ children }) {
  const [pathname, setPathname] = useState('/')

  const actionWithPromise = () => {
    action('clicked link')()
    // we need to return promise because it is needed by Link.linkClicked
    return Promise.resolve()
  }

  const mockRouter = {
    pathname,
    prefetch: actionWithPromise,
    push: async newPathname => {
      action('Clicked link')(newPathname)
      setPathname(newPathname)
    },
    replace: actionWithPromise
  }

  Router.router = mockRouter

  return <RouterContext.Provider value={mockRouter}>{children}</RouterContext.Provider>
}

export default RouterMock
