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
  transition: margin-bottom 225ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 0;
  transition: margin-bottom 225ms cubic-bezier(0.4, 0, 0.2, 1);
  ${styleWhenTrue<ExpansionPanelTheme>(({ expanded }) => expanded, expandedWrapperStyle)};
  &:not(:first-of-type) {
    border-top: 1px solid ${themeColor(Color.GREY_400)};
  }
  overflow: hidden;
`

const expandedHeaderStyle = css`
  padding: 15px 10px;
`

export const Header = styled.button`
  padding: 10px;
  display: block;
  width: 100%;
  font-size: 1.4rem;
  font-weight: bold;
  letter-spacing: 0.53px;
  text-align: left;
  color: ${themeColor(Color.PRIMARY)};
  transition: padding 225ms cubic-bezier(0.4, 0, 0.2, 1);
  ${styleWhenTrue<ExpansionPanelTheme>(({ expanded }) => expanded, expandedHeaderStyle)};
  display: flex;
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`

const expandedContentStyle = css`
  // its shortcut, it should be calculated height passed using props e.g: scrollheight of html element
  max-height: 1000px;
  transition: max-height 225ms cubic-bezier(0.4, 0, 0.2, 1);
`

export const Content = styled(Flex)<ContentProps>`
  max-height: 0;
  transition: max-height 225ms cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  ${styleWhenTrue<ExpansionPanelTheme>(({ expanded }) => expanded, expandedContentStyle)};
`

export const IconWrapper = styled.div`
  height: 25px;
  width: 25px;
  .icon .path {
    fill: ${themeColor(Color.SECONDARY)};
  }
`
