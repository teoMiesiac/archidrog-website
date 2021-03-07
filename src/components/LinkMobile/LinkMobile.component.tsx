import React from 'react'
import { GatsbyLinkProps } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import { LinkMobileType } from './LinkMobile.constants'
import { ArrowRight } from '~/components/Icons/ArrowRight'
import { CustomLink, Content, IconWrapper } from './LinkMobile.styles'

interface Props {
  mode?: LinkMobileType
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkProps?: GatsbyLinkProps<any>
  onClick?: () => void
  to: string
  children: string | React.ReactNode
  offset?: number
}

const LinkMobile = ({ mode, children, to, onClick, offset }: Props): JSX.Element => (
  <ThemeProvider theme={{ mode }}>
    <CustomLink
      to={to}
      spy={true}
      hashSpy={true}
      smooth={true}
      offset={offset}
      activeClassName="active"
      onClick={onClick}
    >
      <Content>
        {children}
        <IconWrapper>
          <ArrowRight />
        </IconWrapper>
      </Content>
    </CustomLink>
  </ThemeProvider>
)

export default LinkMobile
