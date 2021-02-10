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

  /* fade animations */
  .fade-enter .animate {
    margin-top: 0px;
    margin-bottom: 0px;
    max-height: 0;
  }

  .fade-enter-active .animate {
    margin-top: 9px;
    margin-bottom: 9px;
    max-height: 50px;
    // transition: max-height 500ms linear;
    transition: max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), margin-top 500ms linear, margin-bottom 500ms linear;
  }
  .fade-exit .animate {
    margin-top: 9px;
    margin-bottom: 9px;
    max-height: 50px;
  }
  .fade-exit-active .animate {
    margin-top: 0px;
    margin-bottom: 0px;
    max-height: 0;
    overflow-y: hidden;
    transition: max-height 500ms cubic-bezier(0.4, 0, 0.2, 1), margin-top 500ms cubic-bezier(0.4, 0, 0.2, 1),
      margin-bottom 500ms cubic-bezier(0.4, 0, 0.2, 1);
    //transition: max-height 500ms linear;
  }
`

export const DIV = styled.div`
  padding: 0 5px;
  margin-top: 9px;
  margin-bottom: 9px;
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
  // padding: 9px 5px;
  vertical-align: middle;
  &:nth-of-type(4) {
    width: 1%;
  }
  &:nth-of-type(5) {
    width: 1%;
  }
`
export const TR = styled.tr`
  //height: 24px;
  border-bottom: 1px solid ${themeColor(Color.GREY_400)};
  transition: all ${themeTransition(Transition.BUTTON)};

  &:hover {
    //${themeShadow(Shadow.OFFER)};
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
