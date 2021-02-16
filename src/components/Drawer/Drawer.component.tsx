import React from 'react'
import { Wrapper, Backdrop } from './Drawer.styles'

interface Props {
  isOpen: boolean
  children: React.ReactNode
  headerHeight: number
}

function Drawer({ children, isOpen, headerHeight }: Props): JSX.Element {
  const [animate, setAnimate] = React.useState(false)

  React.useEffect(() => {
    if (isOpen && !animate) {
      setAnimate(true)
    }
  }, [animate, isOpen])

  console.log(headerHeight)

  return (
    <>
      <Backdrop className={`${isOpen ? 'active' : ''}`} />
      <Wrapper headerHeight={headerHeight} className={`${isOpen ? 'active' : ''} ${animate ? 'animate' : ''}`}>
        {children}
      </Wrapper>
    </>
  )
}

export default Drawer
