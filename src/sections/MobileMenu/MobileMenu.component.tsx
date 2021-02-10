import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Drawer } from '~/components/Drawer'
import { Hamburger } from '~/components/Hamburger'
import { LinkMobile } from '~/components/LinkMobile'
import { NavigationLinkHeader } from '~/models'
import { MobileMenuType } from './MobileMenu.constants'
import { Container, DrawerInnerWrapper, DrawerHeader } from './MobileMenu.styles'

interface Props {
  mode?: MobileMenuType
  active: boolean
  onClose: () => void
  items: NavigationLinkHeader[]
}

const MobileMenu = ({ mode = MobileMenuType.PRIMARY, active, onClose, items }: Props): JSX.Element => {
  return (
    <ThemeProvider theme={{ mode }}>
      <Container>
        <Drawer isOpen={active}>
          <DrawerInnerWrapper>
            <DrawerHeader>
              {/*<ArchidrogLogo wMobile={110} mode={ArchidrogLogoType.SECONDARY} /> */}
              <Hamburger onClick={onClose} active={active} />
            </DrawerHeader>
            {items.map(item => (
              <LinkMobile key={item.name} to={item.to}>
                {item.name}
              </LinkMobile>
            ))}
          </DrawerInnerWrapper>
        </Drawer>
      </Container>
    </ThemeProvider>
  )
}

export default MobileMenu
