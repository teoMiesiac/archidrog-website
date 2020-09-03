import React, { useState } from 'react'
import { Flex } from 'reflexbox/styled-components'
import { MobileMenu } from '~/sections/MobileMenu'
import {
  HeaderWrapper,
  BurgerWrapper,
  MobileIconWrapper,
  DesktopContentWrapper,
  MobileContentWrapper
} from './Header.styles'
import { Menu as NavigationList } from '../../../fixtures/navigation'
import { Hamburger } from '~/components/Hamburger'
import { ArchidrogLogo } from '~/components/ArchidrogLogo'
import { ArchidrogLogoType } from '~/components/ArchidrogLogo/ArchidrogLogo.constants'
import { NavigationLink } from '~/components/NavigationLink'

const Header = (): JSX.Element => {
  const [drawerActive, setDrawerActive] = useState(false)

  const onHamburgerClick = () => {
    setDrawerActive(!drawerActive)
  }

  return (
    <>
      <HeaderWrapper>
        <MobileContentWrapper
          flexWrap="no-wrap"
          flexDirection={['row']}
          justifyContent="space-between"
          alignItems="center"
          py={[8, 21]}
          width={['100%']}
        >
          <Flex
            flexWrap="no-wrap"
            flexDirection={['row']}
            alignItems="center"
            justifyContent="space-between"
            width={['100%']}
          >
            <BurgerWrapper>
              <Hamburger onClick={onHamburgerClick} active={drawerActive} />
            </BurgerWrapper>
            <Flex as="nav" flexDirection={['row']} justifyContent="center" alignItems="center" height={['100%']}>
              <MobileIconWrapper>
                <ArchidrogLogo mode={ArchidrogLogoType.SECONDARY} wMobile={50} />
              </MobileIconWrapper>
            </Flex>
          </Flex>
        </MobileContentWrapper>

        <DesktopContentWrapper
          flexWrap="no-wrap"
          flexDirection={['row']}
          justifyContent="space-between"
          alignItems="center"
          maxWidth={1420}
          width={['100%']}
          py={[25]}
        >
          <ArchidrogLogo mode={ArchidrogLogoType.SECONDARY} wMobile={131} wDesktop={131} />
          <Flex flexWrap="no-wrap" flexDirection={['row']}>
            {NavigationList.map(item => (
              <NavigationLink key={item.name} {...item} />
            ))}
          </Flex>
        </DesktopContentWrapper>
      </HeaderWrapper>
      <MobileMenu active={drawerActive} onClose={onHamburgerClick} items={NavigationList} />
    </>
  )
}

export default Header
