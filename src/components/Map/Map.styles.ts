import styled from 'styled-components'
import { Shadow } from '~/styles/constants'
import { themeShadow } from '~/styles/getters'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  flex: 1;
  ${themeShadow(Shadow.MAP)};
  iframe {
    height: 100%;
    width: 100%;
    position: relative;
  }
`
