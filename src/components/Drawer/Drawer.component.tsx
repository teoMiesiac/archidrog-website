import React from 'react'
import { Wrapper, Backdrop } from './Drawer.styles'

interface Props {
  isOpen: boolean
  children: React.ReactNode
}

function Drawer({ children, isOpen }: Props): JSX.Element {
  const [animate, setAnimate] = React.useState(false)

  React.useEffect(() => {
    if (isOpen && !animate) {
      setAnimate(true)
    }
  }, [animate, isOpen])

  return (
    <>
      <Backdrop className={`${isOpen ? 'active' : ''}`} />

      <Wrapper className={`${isOpen ? 'active' : ''} ${animate ? 'animate' : ''}`}>{children}</Wrapper>
    </>
  )
}

export default Drawer
