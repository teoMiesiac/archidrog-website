import styled, { css } from 'styled-components'
import { space, SpaceProps } from 'styled-system'
import { Color, Transition } from '~/styles/constants'
import { themeColor, themeTransition } from '~/styles/getters'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const errorStyles = css`
  &.error {
    transition: all ${themeTransition(Transition.BUTTON)};
    border-bottom: 1px solid ${themeColor(Color.ERROR)};
    color: ${themeColor(Color.ERROR)};
    &::placeholder {
      transition: all ${themeTransition(Transition.BUTTON)};

      color: ${themeColor(Color.ERROR)};
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding: 10px 0;
  margin: 10px 0;
  color: ${themeColor(Color.PRIMARY)};
  font-size: 1.5rem;
  letter-spacing: 0.4px;
  font-weight: 300;
  border-bottom: 1px solid ${themeColor(Color.PRIMARY)};
  ${errorStyles};
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 0;
  margin: 10px 0;
  color: ${themeColor(Color.PRIMARY)};
  border: none;
  font-size: 1.5rem;
  letter-spacing: 0.4px;
  font-weight: 300;
  border-bottom: 1px solid ${themeColor(Color.PRIMARY)};
  resize: none;
  ${errorStyles};
`

export const ButtonWrapper = styled.div<SpaceProps>`
  width: 300px;
  ${space};

  button {
    width: 100%;
    height: 56px;
  }
`
