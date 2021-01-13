import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { Link } from 'gatsby'
import { LinkMobileType } from './LinkMobile.constants'
import { Border } from '~/styles/constants'
import { themeBorder } from '~/styles/getters'

const PrimaryLinkMobileStyle = css`
  border-bottom: 1px solid ${themeBorder(Border.REGULAR)};
`

export const CustomLink = styled(Link)`
  padding: 20px;
  display: inline-block;
  width: 100%;
  font-size: 1.6rem;

  ${theme('mode', {
    [LinkMobileType.PRIMARY]: PrimaryLinkMobileStyle
  })}
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

export const IconWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
`
