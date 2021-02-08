import React, { useEffect } from 'react'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { Wrapper, Content, Header, IconWrapper } from './ExpansionPanel.styles'
import { ArrowDown } from '~/components/Icons/ArrowDown'

interface Props {
  header: string | React.ReactNode
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
}

export interface ExpansionPanelTheme extends DefaultTheme {
  expanded: boolean
}

const ExpansionPanel = ({ active = false, onClick = () => undefined, header, children }: Props): JSX.Element => {
  const [expanded, setExpanded] = React.useState(false)

  useEffect(() => {
    setExpanded(active)
  }, [active])

  return (
    <ThemeProvider theme={{ expanded } as ExpansionPanelTheme}>
      <Wrapper onClick={onClick}>
        <Header onClick={() => setExpanded(!expanded)}>
          <span>{header}</span>
          <IconWrapper>
            <ArrowDown />
          </IconWrapper>
        </Header>
        <Content>{children}</Content>
      </Wrapper>
    </ThemeProvider>
  )
}

export default ExpansionPanel
