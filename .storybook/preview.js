import { withTheme } from './decorators'
import { theme } from '../src/styles/theme'
import { addDecorator, addParameters } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { customViewports } from './viewports'
import { Breakpoint, sizes } from '../src/styles/media'
import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'

// Gatsby's Link overrides:
// Gatsby Link calls the `enqueue` & `hovering` methods on the global variable ___loader.
// This global object isn't set in storybook context, requiring you to override it to empty functions (no-op),
// so Gatsby Link doesn't throw any errors.
global.___loader = {
  enqueue: () => {},
  hovering: () => {}
}

// Navigating through a gatsby app using gatsby-link or any other gatsby component will use the `___navigate` method.
// In Storybook it makes more sense to log an action than doing an actual navigate. Checkout the actions addon docs for more info: https://github.com/storybookjs/storybook/tree/master/addons/actions.

window.___navigate = pathname => {
  action('NavigateTo:')(pathname)
}

addDecorator(withTheme(theme))

addParameters({
  viewport: {
    viewports: {
      [Breakpoint.MOBILE]: {
        name: Breakpoint.MOBILE,
        styles: {
          width: `${sizes[Breakpoint.MOBILE]}px`,
          height: '800px'
        }
      },
      [Breakpoint.TABLET]: {
        name: Breakpoint.TABLET,
        styles: {
          width: `${sizes[Breakpoint.TABLET]}px`,
          height: '800px'
        }
      },
      [Breakpoint.DESKTOP]: {
        name: Breakpoint.DESKTOP,
        styles: {
          width: `${sizes[Breakpoint.DESKTOP]}px`,
          height: '800px'
        }
      },
      [Breakpoint.DESKTOP_WIDE]: {
        name: Breakpoint.DESKTOP_WIDE,
        styles: {
          width: `${sizes[Breakpoint.DESKTOP_WIDE]}px`,
          height: '800px'
        }
      },
      [Breakpoint.DESKTOP_FULL]: {
        name: Breakpoint.DESKTOP_FULL,
        styles: {
          width: `${sizes[Breakpoint.DESKTOP_FULL]}px`,
          height: '800px'
        }
      }
    }
  }
})
