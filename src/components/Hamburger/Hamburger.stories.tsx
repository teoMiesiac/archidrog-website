import React from 'react'
import { State, Store } from '@sambego/storybook-state'
import Hamburger from './Hamburger.component'

const store = new Store({
  active: false
})

export function Default() {
  return (
    <State store={store}>
      {state => <Hamburger active={state.active} onClick={() => store.set({ active: !store.get('active') })} />}
    </State>
  )
}

export default {
  title: 'Shared/Hamburger'
}
