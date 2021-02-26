import React, { ButtonHTMLAttributes } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { Loupe } from '~/components/Icons/Loupe'
import { ButtonPreviewType } from './ButtonPreview.constants'
import { CustomButton, IconWrapper, TextWrapper } from './ButtonPreview.styles'

interface ButtonArrowTheme extends DefaultTheme {
  mode: ButtonPreviewType
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonPreviewType
  fontSize?: string[]
}

const ButtonPreview = ({ mode = ButtonPreviewType.PRIMARY, fontSize = [''], ...rest }: Props): JSX.Element => (
  <ThemeProvider theme={{ mode } as ButtonArrowTheme}>
    <CustomButton {...rest}>
      <Flex width="100%" justifyContent="center" flexFlow="row nowrap" alignItems="center">
        <IconWrapper>
          <Loupe />
        </IconWrapper>
        <TextWrapper fontSize={fontSize}>Podgląd</TextWrapper>
      </Flex>
    </CustomButton>
  </ThemeProvider>
)

export default ButtonPreview
