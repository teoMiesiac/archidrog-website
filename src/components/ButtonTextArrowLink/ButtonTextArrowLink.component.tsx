import React from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { ButtonArrowType } from './ButtonTextArrowLink.constants'
import { CustomLink, IconWrapper, TextWrapper } from './ButtonTextArrowLink.styles'
import { ArrowLong } from '~/components/Icons/ArrowLong'
import { GatsbyLinkProps } from 'gatsby'

interface Props {
  mode?: ButtonArrowType
  text: string
  fontSize?: string[]
  padding?: string[]
  fontWeight?: string[]
  to: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  linkProps?: GatsbyLinkProps<any>
}

interface ButtonArrowTheme extends DefaultTheme {
  mode: ButtonArrowType
}

const ButtonArrow = ({
  mode = ButtonArrowType.PRIMARY,
  text,
  to,
  fontSize = [''],
  fontWeight = [''],
  padding = [''],
  ...linkProps
}: Props): JSX.Element => (
  <ThemeProvider theme={{ mode } as ButtonArrowTheme}>
    <CustomLink to={to} padding={padding} fontWeight={fontWeight} {...linkProps}>
      <Flex width="100%" justifyContent="center" flexFlow="row nowrap" alignItems="center">
        <TextWrapper fontSize={fontSize}>{text}</TextWrapper>
        <IconWrapper>
          <ArrowLong />
        </IconWrapper>
      </Flex>
    </CustomLink>
  </ThemeProvider>
)

export default ButtonArrow
