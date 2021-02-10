import styled, { css } from 'styled-components'
import theme from 'styled-theming'
import { Link } from 'gatsby'
import { LinkMobileType } from './LinkMobile.constants'
import { Border, Color } from '~/styles/constants'
import { themeBorder, themeColor } from '~/styles/getters'

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
  position: relative;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100px;
    border-bottom: 2px solid ${themeColor(Color.SECONDARY)};
  }
`

export const IconWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  .icon .path {
    fill: ${themeColor(Color.SECONDARY)};
  }
`
