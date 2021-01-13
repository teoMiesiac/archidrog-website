import styled from 'styled-components'
import { Breakpoint, getBreakpointMediaQuery } from '~/styles/media'

export const Wrapper = styled.div`
  @media ${getBreakpointMediaQuery(Breakpoint.DESKTOP)} {
    display: none;
  }
`
