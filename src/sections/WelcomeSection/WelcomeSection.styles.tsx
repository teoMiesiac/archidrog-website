import styled from 'styled-components'
import { fontSize, FontSizeProps } from 'styled-system'
import { Color } from '~/styles/constants'
import { themeColor } from '~/styles/getters'

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Title = styled.h1<FontSizeProps>`
  color: ${themeColor(Color.PRIMARY)};
  ${fontSize};
  font-weight: bold;
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.58px;
`
