import styled, { css } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { space, SpaceProps } from 'styled-system'
import { Color, Transition, Shadow } from '~/styles/constants'
import { themeColor, themeTransition, themeShadow } from '~/styles/getters'
import { Breakpoint, getBreakpointMediaQuery } from '~/styles/media'

export const Wrapper = styled(Flex)<SpaceProps>`
  ${space}
  display: none;
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP)} {
    display: flex;
  }
`

interface ListProps {
  width: number
}

export const List = styled.ul<ListProps>`
  width: ${props => props.width}px;
`

export const ListItem = styled.li`
  margin-right: 30px;
  padding: 12px 10px;
  border-bottom: 1px solid ${themeColor(Color.GREY_400)};
  transition: all ${themeTransition(Transition.BUTTON)};
  &:hover {
    ${themeShadow(Shadow.OFFER)};
  }
`

const activeStyles = css`
  font-weight: bold;
  padding-left: 15px;
  &::before {
    transition: all ${themeTransition(Transition.BUTTON)};
    opacity: 1;
  }
`
interface PropsText {
  active: boolean
}

export const Text = styled.p<PropsText>`
  position: relative;
  display: block;
  font-size: 1.4rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.53px;
  white-space: nowrap;
  color: ${themeColor(Color.PRIMARY)};
  transition: all ${themeTransition(Transition.BUTTON)};

  &::before {
    position: absolute;
    left: -8px;
    top: 2px;
    content: '';
    width: 14px;
    height: 14px;
    background-color: ${themeColor(Color.SECONDARY)};
    opacity: 0;
  }

  ${ListItem}:hover & {
    font-weight: bold;
    padding-left: 13px;
  }

  ${props => props.active && activeStyles};
`
