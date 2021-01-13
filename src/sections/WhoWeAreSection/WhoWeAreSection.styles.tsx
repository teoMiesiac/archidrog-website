import styled from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { themeColor } from '~/styles/getters'
import { Color } from '~/styles/constants'

export const SubSection = styled(Flex)`
  background-color: ${themeColor(Color.GREY)};
`
