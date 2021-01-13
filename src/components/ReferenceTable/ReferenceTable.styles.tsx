import styled from 'styled-components'
import { Color, Transition, Shadow } from '~/styles/constants'
import { themeColor, themeTransition, themeShadow } from '~/styles/getters'
import { getBreakpointMediaQuery, Breakpoint } from '~/styles/media'

export const Wrapper = styled.div`
  overflow-x: auto;
`

export const ExpanderWrapper = styled.div`
  width: 24px;
  height: 24px;
`

export const Table = styled.table`
  width: 100%;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.53px;
  color: ${themeColor(Color.PRIMARY)};
  @media ${getBreakpointMediaQuery(Breakpoint.TABLET)} {
    font-size: 1.4rem;
  }
`

export const THead = styled.thead`
  font-size: 1.2rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 1.42px;
`
export const TD = styled.td`
  padding: 9px 5px;
  vertical-align: middle;
  height: 36px;
  &:nth-of-type(4) {
    width: 1%;
  }
  &:nth-of-type(5) {
    width: 1%;
  }
`
export const TR = styled.tr`
  height: 24px;
  border-bottom: 1px solid ${themeColor(Color.GREY_400)};
  transition: all ${themeTransition(Transition.BUTTON)};

  &:hover {
    ${themeShadow(Shadow.OFFER)};
  }
`

export const TH = styled.th`
  text-align: left;
  padding: 9px 5px;
  white-space: nowrap;
  &:nth-of-type(4) {
    text-align: center;
  }
  &:nth-of-type(5) {
    text-align: center;
  }
`

export const Text = styled.p`
  width: 100%;
  text-align: left;
  color: ${themeColor(Color.PRIMARY)};
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.53px;
`

export const Bold = styled.span`
  font-weight: bold;
`
export const ButtonWrapper = styled.div``
