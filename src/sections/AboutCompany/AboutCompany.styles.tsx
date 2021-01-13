import styled from 'styled-components'
import { margin, marginTop, MarginProps } from 'styled-system'

export const Paragraph = styled.p<MarginProps>`
  ${margin}
  ${marginTop}
  width: 100%;
  font-size: 1.5rem;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: 0.4px;
`

export const Bold = styled.span`
  font-weight: bold;
`
