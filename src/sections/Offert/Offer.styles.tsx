import styled from 'styled-components'
import { margin, MarginProp } from 'styled-system'

export const SubTitle = styled.p<MarginProp>`
  width: 100%;
  ${margin}
  text-align: left;
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

export const BackgroundMask = styled.div`
  width: 100%;
  object-fit: contain;
  height: 100%;
  background-image: linear-gradient(to bottom, #ffffff, rgba(246, 246, 246, 0.95) 50%, #ffffff);
  background-position: 0 0;
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`
