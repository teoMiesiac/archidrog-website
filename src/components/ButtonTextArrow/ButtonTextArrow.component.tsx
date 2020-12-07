import React, { ButtonHTMLAttributes } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { ArrowLong } from '~/components/Icons/ArrowLong'
import { ButtonArrowType } from './ButtonTextArrow.constants'
import { CustomButton, IconWrapper, TextWrapper } from './ButtonTextArrow.styles'

interface ButtonArrowTheme extends DefaultTheme {
  mode: ButtonArrowType
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonArrowType
  text: string
  fontSize?: string[]
}

const ButtonTextArrow = ({
  mode = ButtonArrowType.PRIMARY,
  text,
  fontSize = [''],
  ...restProps
}: Props): JSX.Element => (
  <ThemeProvider theme={{ mode } as ButtonArrowTheme}>
    <CustomButton {...restProps}>
      <Flex width="100%" justifyContent="center" flexFlow="row nowrap" alignItems="center">
        <TextWrapper fontSize={fontSize}>{text}</TextWrapper>
        <IconWrapper>
          <ArrowLong />
        </IconWrapper>
      </Flex>
    </CustomButton>
  </ThemeProvider>
)

export default ButtonTextArrow
