import React from 'react'
import styled from 'styled-components'
import { State, Store } from '@sambego/storybook-state'
import Drawer from './Drawer.component'

const InnerWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: lightblue;
  padding: 50px;
  font-size: 3rem;
`

const Button = styled.button<{ right?: boolean }>`
  font-size: 3rem;
  position: absolute;
  right: 30px;
  top: 0;
  ${props => (props.right ? 'right: 30px;' : 'left: 30px;')};
`

const store = new Store({
  open: false
})

export function Default() {
  return (
    <State store={store}>
      {state => (
        <React.Fragment>
          <Drawer isOpen={state.open}>
            <InnerWrapper>
              Content
              <Button right onClick={() => store.set({ open: false })}>
                Close
              </Button>
            </InnerWrapper>
          </Drawer>
          <Button onClick={() => store.set({ open: true })}>Open</Button>
        </React.Fragment>
      )}
    </State>
  )
}

export default {
  title: 'Shared|Drawer'
}
