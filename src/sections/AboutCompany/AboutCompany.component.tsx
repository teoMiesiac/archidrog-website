import React from 'react'
import { Flex, Box } from 'reflexbox/styled-components'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { CarouselAbout } from '~/components/CarouselAbout'
import { Paragraph, Bold } from './AboutCompany.styles'

const AboutCompany = (): JSX.Element => (
  <Section>
    <Flex
      flexDirection={['column', 'column']}
      flexWrap="nowrap"
      px={[15, 30]}
      py={[20, 30, 50]}
      maxWidth={1480}
      width="100%"
      justifyContent={['', 'space-between']}
    >
      <SectionTitle>O firmie</SectionTitle>
      <Paragraph marginTop={['10px', '10px', '20px']}>
        <Bold>Pracownia Projektowa ARCHIDROG</Bold> rozpoczęła swoją działalność w roku <Bold>1997</Bold>. W czasie, w
        którym wchodziliśmy na rynek, byliśmy jedną z nielicznych firm specjalizujących się w doradztwie w zakresie
        pozyskiwania środków z przedakcesyjnych instrumentów pomocy Unii Europejskiej. Nasze działania skupione były na
        wykonywaniu opracowań dla programu PHARE oraz ISPA. Z należytą starannością i z zachowaniem wszelkich
        standardów, przygotowywaliśmy zadania dla coraz szerszej grupy Inwestorów.
      </Paragraph>
      <Flex flexDirection={['column', 'column', 'row']}>
        <Box width={['60%']} paddingRight={[0, 0, 100]}>
          <Paragraph marginTop={['10px', '10px', '20px']}>
            Ciągłe doskonalenie wiedzy, zdobywanie nowych kompetencji oraz wzorcowo zrealizowane projekty, pozwoliły na
            zdobycie wysokiej pozycji na rynku. Opracowywaliśmy wnioski aplikacyjne, studia wykonalności, analizy
            ekonomiczne, oceny oddziaływania na środowisko. Po uzyskaniu dofinansowania dla projektów, przygotowywaliśmy
            dokumentacje przetargowe, a po zakończeniu robót budowlanych monitoringi porealizacyjne.
          </Paragraph>
          <Paragraph marginTop={['10px', '10px', '20px']}>
            Ciągłe doskonalenie wiedzy, zdobywanie nowych kompetencji oraz wzorcowo zrealizowane projekty, pozwoliły na
            zdobycie wysokiej pozycji na rynku. Opracowywaliśmy wnioski aplikacyjne, studia wykonalności, analizy
            ekonomiczne, oceny oddziaływania na środowisko. Po uzyskaniu dofinansowania dla projektów, przygotowywaliśmy
            dokumentacje przetargowe, a po zakończeniu robót budowlanych monitoringi porealizacyjne.
          </Paragraph>
        </Box>
        <Box width={['100%', '100%', '40%']} marginTop={['10px', '10px', '20px']}>
          <CarouselAbout />
        </Box>
      </Flex>
      <Paragraph marginTop={['10px', '10px', '20px']}>
        Przedmiotem naszej działalności jest również wykonywanie Programów Funkcjonalno-Użytkowych dla przedsięwzięć w
        formie „zaprojektuj i wybuduj” oraz uzyskiwanie decyzji o środowiskowych uwarunkowaniach zgody na realizację
        inwestycji. Naszymi Zleceniodawcami są głównie urzędy marszałkowskie, starostwa powiatowe, urzędy miast i gmin,
        oddziały Generalnej Dyrekcji Dróg Krajowych i Autostrad oraz Zarządy Dróg Wojewódzkich.
      </Paragraph>
    </Flex>
  </Section>
)

export default AboutCompany
