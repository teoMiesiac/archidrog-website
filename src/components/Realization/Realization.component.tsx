import React from 'react'
import { ImageSubRealization } from '~/models'
import { Flex, Box } from 'reflexbox/styled-components'
import {
  ImageContainer,
  MainImage,
  DesktopImage,
  Title,
  Content,
  BulletPointList,
  BulletPoint,
  BulletPointText
} from './Realization.styles'

interface Props {
  images: ImageSubRealization[]
  title: string
  bulletPoints: string[]
}

const Realization = ({ images, title, bulletPoints }: Props): JSX.Element => {
  console.log(images)

  return (
    <Flex flexDirection={['column', 'row', 'row']}>
      <ImageContainer flexDirection="column" width={['100%', '100%', '40%']} position="relative" top={[0, 0, '-50px']}>
        <MainImage width={['100%']} fluid={images[0].childImageSharp.fluid}></MainImage>
        <Flex flexDirection={'row'} width={'100%'} justifyContent="space-between" marginTop="20px">
          <DesktopImage fluid={images[1].childImageSharp.fluid} width="50%" margin="0 10px 0 0" />
          <DesktopImage fluid={images[2].childImageSharp.fluid} width="50%" margin="0 0 0 10px" />
        </Flex>
      </ImageContainer>
      <Content padding={['10px']} flexDirection={'column'} width={['100%', '100%', '60%']}>
        <Title fontSize={['1.6rem', '1.8rem']}>{title}</Title>
        <BulletPointList>
          {bulletPoints.map(bulletPoint => (
            <BulletPoint key={bulletPoint}>
              <BulletPointText>{bulletPoint}</BulletPointText>
            </BulletPoint>
          ))}
        </BulletPointList>
      </Content>
    </Flex>
  )
}

export default Realization
