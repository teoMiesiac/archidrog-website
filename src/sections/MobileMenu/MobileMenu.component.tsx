import React from 'react'
import { ThemeProvider } from 'styled-components'
import { observer } from 'mobx-react-lite'
import { Drawer } from '~/components/Drawer'
import { LinkMobile } from '~/components/LinkMobile'
import { NavigationLinkHeader } from '~/models'
import { MobileMenuType } from './MobileMenu.constants'
import { Container, DrawerInnerWrapper } from './MobileMenu.styles'
import { useDataStore } from '~/store/hooks'

interface Props {
  mode?: MobileMenuType
  active: boolean
  onClose: () => void
  items: NavigationLinkHeader[]
}

const MobileMenu = observer(
  ({ mode = MobileMenuType.PRIMARY, active, onClose, items }: Props): JSX.Element => {
    const {
      UIStore: { headerHeight }
    } = useDataStore()
    return (
      <ThemeProvider theme={{ mode }}>
        <Container>
          <Drawer isOpen={active}>
            <DrawerInnerWrapper>
              {items.map(item => (
                <LinkMobile key={item.name} to={item.to} offset={-headerHeight} onClick={onClose}>
                  {item.name}
                </LinkMobile>
              ))}
            </DrawerInnerWrapper>
          </Drawer>
        </Container>
      </ThemeProvider>
    )
  }
)

export default MobileMenu
