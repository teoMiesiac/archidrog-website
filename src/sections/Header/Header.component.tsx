import React, { useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Flex } from 'reflexbox/styled-components'
import { MobileMenu } from '~/sections/MobileMenu'
import {
  HeaderBackgroundImage,
  BackgroundMask,
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

export const query = graphql`
  query {
    file1: file(relativePath: { eq: "images/foto1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3543, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Header = (): JSX.Element => {
  const [drawerActive, setDrawerActive] = useState(false)
  const data = useStaticQuery(query)

  const onHamburgerClick = () => {
    setDrawerActive(!drawerActive)
  }

  return (
    <>
      <HeaderWrapper>
        <HeaderBackgroundImage fluid={data.file1.childImageSharp.fluid}>
          <BackgroundMask>
            <MobileContentWrapper
              flexWrap="no-wrap"
              flexDirection={['row']}
              justifyContent="space-between"
              alignItems="center"
              py={[8, 21]}
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
              padding={['15px 20px', '15px 30px 0 30px']}
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
          </BackgroundMask>
        </HeaderBackgroundImage>
      </HeaderWrapper>

      <MobileMenu active={drawerActive} onClose={onHamburgerClick} items={NavigationList} />
    </>
  )
}

export default Header
