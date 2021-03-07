import React from 'react'
import { Flex, Box } from 'reflexbox/styled-components'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { CarouselAbout } from '~/components/CarouselAbout'
import { Paragraph, Bold } from './AboutCompany.styles'

const AboutCompany = (): JSX.Element => (
  <Section id="o-firmie">
    <Flex
      flexDirection={['column', 'column']}
      flexWrap="nowrap"
      px={[15, 30]}
      py={[20, 30, 50]}
      my={[20, 50, 100]}
      maxWidth={1480}
      width="100%"
      justifyContent={['', 'space-between']}
    >
      <SectionTitle>O firmie</SectionTitle>
      <Paragraph marginTop={['15px', '15px', '20px']}>
        <Bold>Pracownia Projektowa ARCHIDROG</Bold> rozpoczęła swoją działalność w roku <Bold>1997</Bold>. W czasie, w
        którym wchodziliśmy na rynek, byliśmy jedną z nielicznych firm specjalizujących się w doradztwie w zakresie
        pozyskiwania środków z przedakcesyjnych instrumentów pomocy Unii Europejskiej. Nasze działania skupione były na
        wykonywaniu opracowań dla programu PHARE oraz ISPA. Z należytą starannością i z zachowaniem wszelkich
        standardów, przygotowywaliśmy zadania dla coraz szerszej grupy Inwestorów.
      </Paragraph>
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box width={['100%', '100%', '60%']} paddingRight={[0, 0, 100]}>
          <Paragraph marginTop={['15x', '15px', '20px']}>
            Ciągłe doskonalenie wiedzy, zdobywanie nowych kompetencji oraz wzorcowo zrealizowane projekty, pozwoliły na
            zdobycie wysokiej pozycji na rynku. Opracowywaliśmy wnioski aplikacyjne, studia wykonalności, analizy
            ekonomiczne, oceny oddziaływania na środowisko. Po uzyskaniu dofinansowania dla projektów, przygotowywaliśmy
            dokumentacje przetargowe, a po zakończeniu robót budowlanych monitoringi porealizacyjne.
          </Paragraph>
          <Paragraph marginTop={['15px', '15px', '20px']}>
            W 2004 roku, po przystąpieniu Polski do Unii Europejskiej, rozpoczęliśmy przygotowanie dokumentów
            aplikacyjnych w ramach Zintegrowanego Programu Operacyjnego Rozwoju Regionalnego (ZPORR) oraz Sektorowego
            Programu Operacyjnego – Transport (SPO-T). Od roku 2007 wykonujemy opracowania dla inwestycji w ramach
            Programu Operacyjnego Infrastruktura i Środowisko na lata 2007-2013. Przygotowujemy również dokumenty
            aplikacyjne dla Regionalnych Programów Operacyjnych na lata 2007-2013. Na potrzeby opracowań wykonujemy
            analizy: kosztów i korzyści, finansowe. oddziaływania na środowisko, a także prognozy ruchu.
          </Paragraph>
        </Box>
        <Box width={['100%', '100%', '40%']} marginTop={['15px', '15px', '20px']} float="right">
          <CarouselAbout />
        </Box>
      </Flex>
      <Paragraph marginTop={['15px', '15px', '20px']}>
        Przedmiotem naszej działalności jest również wykonywanie Programów Funkcjonalno-Użytkowych dla przedsięwzięć w
        formie „zaprojektuj i wybuduj” oraz uzyskiwanie decyzji o środowiskowych uwarunkowaniach zgody na realizację
        inwestycji. Naszymi Zleceniodawcami są głównie urzędy marszałkowskie, starostwa powiatowe, urzędy miast i gmin,
        oddziały Generalnej Dyrekcji Dróg Krajowych i Autostrad oraz Zarządy Dróg Wojewódzkich.
      </Paragraph>
    </Flex>
  </Section>
)

export default AboutCompany
