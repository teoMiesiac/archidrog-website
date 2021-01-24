import React from 'react'
import { Flex, Box } from 'reflexbox/styled-components'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { ButtonTextArrowLink, ButtonArrowType } from '~/components/ButtonTextArrowLink'
import { Color } from '~/styles/constants'
import { SubSection } from './WhoWeAreSection.styles'

const WhoWeAreSection = (): JSX.Element => (
  <Section>
    <Flex
      flexDirection={['column', 'row']}
      flexWrap="nowrap"
      px={[15, 30]}
      py={[20, 30, 50]}
      maxWidth={1480}
      width="100%"
      justifyContent={['', 'space-between']}
    >
      <SubSection
        flexDirection="column"
        padding={['10px', '20px', '30px']}
        marginBottom={['20px', '0']}
        marginRight={['0', '15px']}
        justifyContent="space-between"
        flex="1"
      >
        <Box>
          <SectionTitle>Gdzie pracujemy?</SectionTitle>
          <Box
            lineHeight={[1.73]}
            letterSpacing={[0.4]}
            fontSize={['1.5rem']}
            color={Color.BLACK}
            padding={['28px 0 35px 0']}
          >
            Nasze projekty wykonujemy na terenie całego kraju, zapewniając Zleceniodawcom terminowość, zawodowe
            doradztwo oraz wysoki poziom obsługi. Potwierdzeniem naszej rzetelności i kompetencji są zrealizowane przez
            nas projekty. Zapraszamy do zapoznania się z wybranymi opracowaniami, wykonanymi przez naszą Pracownię.
          </Box>
        </Box>
        <Box margin={['20px 0', '35px 0 0 0']}>
          <ButtonTextArrowLink to="" text="Sprawdź więcej" mode={ButtonArrowType.SECONDARY} fontSize={['1.6rem']} />
        </Box>
      </SubSection>
      <SubSection
        flexDirection="column"
        padding={['10px', '20px', '30px']}
        marginLeft={['0', '15px']}
        justifyContent="space-between"
        flex="1"
      >
        <Box>
          <SectionTitle>Kto nam zaufał?</SectionTitle>
          <Box
            lineHeight={[1.73]}
            letterSpacing={[0.4]}
            fontSize={['1.5rem']}
            color={Color.BLACK}
            padding={['28px 0 35px 0']}
          >
            Powierzone nam projekty zawsze są przygotowywane zgodnie z aktualnymi wytycznymi, przy zastosowaniu
            obowiązujących przepisów prawnych. Naszymi Zleceniodawcami są głównie Zarządy Dróg Wojewódzkich, oddziały
            Generalnej Dyrekcji Dróg Krajowych i Autostrad, starostwa powiatowe, urzędy miast i gmin. Potwierdzeniem
            wysokiej jakości naszych opracowań są rekomendacje Inwestorów.
          </Box>
        </Box>
        <Box margin={['20px 0', '35px 0 0 0']}>
          <ButtonTextArrowLink to="" text="Sprawdź więcej" mode={ButtonArrowType.SECONDARY} fontSize={['1.6rem']} />
        </Box>
      </SubSection>
    </Flex>
  </Section>
)

export default WhoWeAreSection
