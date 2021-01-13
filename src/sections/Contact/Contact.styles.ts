import styled from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Color } from '~/styles/constants'
import { themeColor } from '~/styles/getters'

export const Subtitle = styled.h3<SpaceProps>`
  ${space};
  font-size: 2.4rem;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.9px;
  color: ${themeColor(Color.PRIMARY)};
  span {
    color: ${themeColor(Color.SECONDARY)};
  }
`
