import styled from 'styled-components'
import { Font, Color, ZIndex } from '~/styles/constants'
import { themeFont, themeColor, themeZIndex } from '~/styles/getters'

export const ControlsContainer = styled.div`
  position: absolute;
  font-size: 1.4rem;
  font-family: ${themeFont(Font.PRIMARY)};
  color: ${themeColor(Color.WHITE)};
  z-index: ${themeZIndex(ZIndex.OVERLAY)};
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  bottom: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  left: 50%;
  transform: translateX(-50%);
  padding-left: 10px;
  border-radius: 5px;
`

export const PageButton = styled.button`
  padding: 10px;
  .icon .path {
    fill: ${themeColor(Color.WHITE)};
  }
`

export const PageButtonLeft = styled(PageButton)`
  transform: rotate(180deg);
`

export const IconWrapper = styled.div`
  height: 25px;
  width: 25px;
  .icon .path {
    fill: ${themeColor(Color.WHITE)};
  }
`

export const Divider = styled.div`
  margin-left: 10px;
  height: 45px;
  width: 1px;
  background-color: ${themeColor(Color.WHITE)};
`

export const Text = styled.p`
  white-space: nowrap;
`

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  left: 5px;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px;
  .icon .path {
    fill: ${themeColor(Color.WHITE)};
  }
  border-radius: 5px;
`

export const LoadingContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`
