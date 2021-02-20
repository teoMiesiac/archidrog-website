import React from 'react'
import { observer } from 'mobx-react-lite'
import { Wrapper, Backdrop } from './Drawer.styles'
import { useDataStore } from '~/store/hooks'

interface Props {
  isOpen: boolean
  children: React.ReactNode
}

const Drawer = observer(
  ({ children, isOpen }: Props): JSX.Element => {
    const [animate, setAnimate] = React.useState(false)
    const {
      UIStore: { headerHeight }
    } = useDataStore()

    React.useEffect(() => {
      if (isOpen && !animate) {
        setAnimate(true)
      }
    }, [animate, isOpen])

    return (
      <>
        <Backdrop className={`${isOpen ? 'active' : ''}`} />
        <Wrapper headerHeight={headerHeight} className={`${isOpen ? 'active' : ''} ${animate ? 'animate' : ''}`}>
          {children}
        </Wrapper>
      </>
    )
  }
)

export default Drawer
