import React, { ButtonHTMLAttributes } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { ButtonArrowType, ButtonArrowDirection } from './ButtonArrow.constants'
import { Button, IconWrapper } from './ButtonArrow.styles'
import { ArrowRightSmall } from '~/components/Icons/ArrowRightSmall'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonArrowType
  direction?: ButtonArrowDirection
}

interface ButtonArrowTheme extends DefaultTheme {
  mode: ButtonArrowType
  direction: ButtonArrowDirection
}

const ButtonArrow = ({
  mode = ButtonArrowType.PRIMARY,
  direction = ButtonArrowDirection.RIGHT,
  ...restProps
}: Props): JSX.Element => (
  <ThemeProvider theme={{ mode, direction } as ButtonArrowTheme}>
    <Button {...restProps}>
      <Flex width="100%" justifyContent="center">
        <IconWrapper>
          <ArrowRightSmall />
        </IconWrapper>
      </Flex>
    </Button>
  </ThemeProvider>
)

export default ButtonArrow
