import React from 'react'
import { Wrapper, Content, Header } from './ExpansionPanel.styles'

interface Props {
  header: string | React.ReactNode
  children: React.ReactNode
}

const ExpansionPanel = ({ header, children }: Props): JSX.Element => {
  const [animate, setAnimate] = React.useState(false)

  return (
    <Wrapper>
      <Header onClick={() => setAnimate(!animate)}>{header}</Header>
      <Content animate={animate}>{children}</Content>
    </Wrapper>
  )
}

export default ExpansionPanel
