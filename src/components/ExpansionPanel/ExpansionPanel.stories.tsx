import React from 'react'
import { State, Store } from '@sambego/storybook-state'
import ExpansionPanel from './ExpansionPanel.component'

const store = new Store({
  open: false
})

export function Default() {
  return (
    <State store={store}>
      {state => (
        <ExpansionPanel header="example header">
          <p>lol</p>
          <p>lol2</p>
          <p>lol3</p>
        </ExpansionPanel>
      )}
    </State>
  )
}

export default {
  title: 'Shared/Expansion Panel'
}
