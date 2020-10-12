import styled from 'styled-components'
import { themeColor } from '~/styles/getters'
import { Color } from '~/styles/constants'
export const SectionWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const SectionTitle = styled.h2`
  width: 100%;
  color: ${themeColor(Color.PRIMARY)};
  font-size: 32px;
  font-weight: bold;
  font-stretch: condensed;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.2px;
  &::before {
    content: '';
    display: inline-block;
    margin-right: 8px;
    width: 12px;
    height: 23px;
    background-color: ${themeColor(Color.SECONDARY)};
  }
`
