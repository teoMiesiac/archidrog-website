import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { ThemeProvider } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { MobileMenu } from '~/sections/MobileMenu'
import {
  BurgerWrapper,
  MobileIconWrapper,
  DesktopContentWrapper,
  MobileContentWrapper,
  HeaderWrapper
} from './Header.styles'
import { Menu as NavigationList } from '../../../fixtures/navigation'
import { Hamburger } from '~/components/Hamburger'
import { ArchidrogLogo } from '~/components/ArchidrogLogo'
import { ArchidrogLogoType } from '~/components/ArchidrogLogo/ArchidrogLogo.constants'
import { NavigationLink } from '~/components/NavigationLink'
import { useDataStore } from '~/store/hooks'

export interface HeaderThemeProps {
  isSticky: boolean
  drawerActive: boolean
}

const Header = observer(
  (): JSX.Element => {
    const [drawerActive, setDrawerActive] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    const {
      UIStore: { setHeaderHeight }
    } = useDataStore()
    const ref = React.createRef<HTMLElement>()

    useEffect(() => {
      const calculateHeight = async () => {
        const currentContainer = ref.current
        if (currentContainer instanceof HTMLElement) {
          try {
            /* eslint-disable */
            // @ts-ignore
            document.fonts.ready.then(function() {
              /* eslint-enable */
              setHeaderHeight(currentContainer.scrollHeight)
            })
          } catch (err) {
            console.log(err.message)
            // set default value for browsers that do not support the listener
            setHeaderHeight(100)
          }
        }
      }
      calculateHeight()
      window.addEventListener('resize', calculateHeight)
      return () => window.removeEventListener('resize', calculateHeight)
    }, [ref, setHeaderHeight])

    useEffect(() => {
      const handleResize = async () => {
        const currentContainer = ref.current
        if (currentContainer instanceof HTMLElement) {
          try {
            /* eslint-disable */
            // @ts-ignore
            document.fonts.ready.then(function() {
              /* eslint-enable */
              setHeaderHeight(currentContainer.scrollHeight)
            })
          } catch (err) {
            console.log(err.message)
            // set default value for browsers that do not support the listener
            setHeaderHeight(100)
          }
        }
      }
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [ref, setHeaderHeight])

    useEffect(() => {
      const cachedRef = ref.current as Element,
        observer = new IntersectionObserver(([e]) => setIsSticky(e.intersectionRatio < 1), { threshold: [1] })

      observer.observe(cachedRef)

      // unmount
      return function() {
        observer.unobserve(cachedRef)
      }
    }, [ref])

    const onHamburgerClick = () => {
      setDrawerActive(!drawerActive)
    }

    return (
      <>
        <ThemeProvider theme={{ isSticky, drawerActive } as HeaderThemeProps}>
          <HeaderWrapper ref={ref}>
            <MobileContentWrapper
              flexWrap="no-wrap"
              flexDirection={['row']}
              justifyContent="space-between"
              alignItems="center"
              py={[8, 8]}
              px={[15, 30]}
              width={['100%']}
            >
              <Flex
                flexWrap="no-wrap"
                flexDirection={['row']}
                alignItems="center"
                justifyContent="space-between"
                width={['100%']}
              >
                <Flex as="nav" flexDirection={['row']} justifyContent="center" alignItems="center" height={['100%']}>
                  <MobileIconWrapper>
                    <ArchidrogLogo mode={ArchidrogLogoType.SECONDARY} wMobile={100} />
                  </MobileIconWrapper>
                </Flex>
                <BurgerWrapper>
                  <Hamburger onClick={onHamburgerClick} active={drawerActive} />
                </BurgerWrapper>
              </Flex>
            </MobileContentWrapper>

            <DesktopContentWrapper
              flexWrap="no-wrap"
              flexDirection={['row']}
              justifyContent="space-between"
              alignItems="center"
              padding={['15px 20px', '15px 30px 15px 30px']}
              maxWidth={1480}
              width="100%"
            >
              <ArchidrogLogo mode={ArchidrogLogoType.SECONDARY} wMobile={131} wDesktop={131} />
              <Flex flexWrap="no-wrap" flexDirection={['row']}>
                {NavigationList.map(item => (
                  <NavigationLink key={item.name} {...item} />
                ))}
              </Flex>
            </DesktopContentWrapper>
          </HeaderWrapper>
        </ThemeProvider>
        <MobileMenu active={drawerActive} onClose={onHamburgerClick} items={NavigationList} />
      </>
    )
  }
)

export default Header
