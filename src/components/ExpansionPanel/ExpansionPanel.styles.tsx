import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { Color } from '~/styles/constants'
import { themeColor } from '~/styles/getters'

export const Wrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid ${themeColor(Color.GREY_400)};
`

export const Header = styled.button`
  display: block;
  width: 100%;
`

interface ContentProps {
  animate: boolean
}

export const Content = styled(Flex)<ContentProps>`
  max-height: ${props => (props.animate ? '1000px' : 0)};
  overflow: hidden;
`
