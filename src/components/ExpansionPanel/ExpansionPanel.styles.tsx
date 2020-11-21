import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { Color } from '~/styles/constants'
import { themeColor } from '~/styles/getters'
import { Breakpoint, getBreakpointMediaQuery } from '~/styles/media'

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${themeColor(Color.GREY_400)};
`

export const Header = styled.button`
  padding: 10px;
  display: block;
  width: 100%;
  font-size: 1.4rem;
  letter-spacing: 0.53px;
  color: ${themeColor(Color.PRIMARY)};
  padding: 10px;
`

interface ContentProps {
  animate: boolean
}

export const Content = styled(Flex)<ContentProps>`
  max-height: ${props => (props.animate ? '1000px' : 0)};
  overflow: hidden;
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP)} {
    width: ${props => props.wDesktop}px;
  }
`
