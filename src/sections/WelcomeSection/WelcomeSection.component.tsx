import React from 'react'
import { Flex, Box } from 'reflexbox/styled-components'
import { Section, Title } from './WelcomeSection.styles'
import { ButtonTextArrowLink, ButtonArrowType } from '~/components/ButtonTextArrowLink'
import { CarouselWelcome } from '~/components/CarouselWelcome'
import { Color } from '~/styles/constants'

const WelcomeSection = (): JSX.Element => (
  <Section>
    <Flex flexDirection={['column', 'row']} flexWrap="nowrap" px={[15, 30]} py={[20, 30, 50]} maxWidth={1480}>
      <Flex flexDirection="column" width={['100%', '50%']} paddingRight={['0', '0', '20px']} justifyContent="center">
        <Title fontSize={['3rem', '3.5rem', '4.2rem']}>Świadczymy usługi w branży drogowej i mostowej</Title>
        <Box
          lineHeight={[1.73]}
          letterSpacing={[0.4]}
          fontSize={['1.5rem']}
          paddingTop={['20px', '26px']}
          color={Color.PRIMARY}
        >
          W zakresie wykonywania kompleksowej dokumentacji aplikacyjnej, służącej pozyskiwaniu środków pomocowych z
          funduszy Unii Europejskiej, a także przygotowujemy oceny projektów inwestycyjnych pod względem finansowym,
          ekonomicznym oraz środowiskowym i społecznym.
        </Box>
        <Box padding={['20px 0', '26px 0 0 0']} width="100%">
          <ButtonTextArrowLink to="/" text="SPRAWDŹ WIĘCEJ" mode={ButtonArrowType.SECONDARY} />
        </Box>
      </Flex>
      <Box width={['100%', '50%']}>
        <CarouselWelcome />
      </Box>
    </Flex>
  </Section>
)

export default WelcomeSection
