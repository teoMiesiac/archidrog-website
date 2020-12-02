import styled from 'styled-components'
import { Color } from '~/styles/constants'
import { themeColor } from '~/styles/getters'

export const IconWrapper = styled.div`
  height: 15px;
  width: 17px;
  margin-right: 10px;
`
export const CategoryTitle = styled.span`
  color: ${themeColor(Color.SECONDARY)};
  font-weight: bold;
  letter-spacing: 0.4px;
`
export const BoldText = styled.p`
  font-weight: bold;
`
