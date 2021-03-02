import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { observer } from 'mobx-react-lite'
import { Flex, Box } from 'reflexbox/styled-components'
import Fade from 'react-reveal/Fade'
import { ParallaxBanner } from 'react-scroll-parallax'
import { Title, Content, BackgroundMask } from './WelcomeSection.styles'
import { ButtonTextArrowLink, ButtonArrowType } from '~/components/ButtonTextArrowLink'
import { CarouselWelcome } from '~/components/CarouselWelcome'
import { Color } from '~/styles/constants'
import { useDataStore } from '~/store/hooks'

export const query = graphql`
  query {
    file1: file(relativePath: { eq: "images/foto1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 3543, quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const WelcomeSection = observer(
  (): JSX.Element => {
    const data = useStaticQuery(query)
    const {
      UIStore: { headerHeight }
    } = useDataStore()

    return (
      <ParallaxBanner
        layers={[
          {
            children: <Img fluid={data.file1.childImageSharp.fluid} style={{ height: '100%' }} />,
            amount: 0.3
          },
          { children: <BackgroundMask style={{ paddingTop: headerHeight }} />, amount: 0 }
        ]}
        style={{
          backgroundPosition: `0 -30px`,
          top: -headerHeight,
          paddingTop: headerHeight,
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Content
          flexDirection={['column', 'row']}
          flexWrap="nowrap"
          px={[0, 30]}
          py={[20, 30, 50]}
          maxWidth={1480}
          width="100%"
          justifyContent={['', 'space-between']}
        >
          <Flex
            flexDirection="column"
            width={['100%', '50%']}
            px={[15, 0]}
            paddingRight={['0', '0', '20px']}
            justifyContent="center"
          >
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
              <Fade left duration={1500} cascade delay={1000}>
                <ButtonTextArrowLink
                  to="/"
                  text="SPRAWDŹ WIĘCEJ"
                  mode={ButtonArrowType.SECONDARY}
                  fontSize={['1.6rem']}
                />
              </Fade>
            </Box>
          </Flex>

          <Box width={['100%', '50%']}>
            <CarouselWelcome />
          </Box>
        </Content>
      </ParallaxBanner>
    )
  }
)

export default WelcomeSection
