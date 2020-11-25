import styled, { css } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { Color, Shadow } from '~/styles/constants'
import { styleWhenTrue, themeColor, themeShadow } from '~/styles/getters'
import { ExpansionPanelTheme } from './ExpansionPanel.component'
interface ContentProps {
  animate: boolean
}

const expandedWrapperStyle = css`
  margin-bottom: 20px;
  ${themeShadow(Shadow.OFFER)};
  transition: margin-bottom 0.6s ease;
`

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 0;
  transition: margin-bottom 0.6s ease;
  ${styleWhenTrue<ExpansionPanelTheme>(({ expanded }) => expanded, expandedWrapperStyle)};
  &:not(:first-of-type) {
    border-top: 1px solid ${themeColor(Color.GREY_400)};
  }
`

const expandedHeaderStyle = css`
  padding: 15px 10px;
`

export const Header = styled.button`
  padding: 10px;
  display: block;
  width: 100%;
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  color: ${themeColor(Color.PRIMARY)};
  transition: padding 0.6s ease;
  ${styleWhenTrue<ExpansionPanelTheme>(({ expanded }) => expanded, expandedHeaderStyle)};
`

const expandedContentStyle = css`
  // its shortcut, it should be calculated height passed using props e.g: scrollheight of html element
  max-height: 1000px;
  transition: max-height 0.6s ease;
`

export const Content = styled(Flex)<ContentProps>`
  max-height: 0;
  transition: max-height 0.6s ease;
  overflow: hidden;
  ${styleWhenTrue<ExpansionPanelTheme>(({ expanded }) => expanded, expandedContentStyle)};
`
