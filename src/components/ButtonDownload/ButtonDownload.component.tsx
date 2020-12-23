import React, { ButtonHTMLAttributes } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Flex } from 'reflexbox/styled-components'
import { Download } from '~/components/Icons/Download'
import { ButtonDownloadType } from './ButtonDownload.constants'
import { CustomButton, IconWrapper, TextWrapper } from './ButtonDownload.styles'

interface ButtonArrowTheme extends DefaultTheme {
  mode: ButtonDownloadType
}

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  mode?: ButtonDownloadType
  href: string
  fontSize?: string[]
}

const ButtonDownload = ({ mode = ButtonDownloadType.PRIMARY, href, fontSize = [''] }: Props): JSX.Element => (
  <ThemeProvider theme={{ mode } as ButtonArrowTheme}>
    <CustomButton href={href} download>
      <Flex width="100%" justifyContent="center" flexFlow="row nowrap" alignItems="center">
        <IconWrapper>
          <Download />
        </IconWrapper>
        <TextWrapper fontSize={fontSize}>Pobierz</TextWrapper>
      </Flex>
    </CustomButton>
  </ThemeProvider>
)

export default ButtonDownload
