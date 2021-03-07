import React from 'react'
import { ImageSubRealization } from '~/models'
import { Flex } from 'reflexbox/styled-components'
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
  return (
    <Flex flexDirection={['column', 'row', 'row']} paddingTop={['0', '0', '50px']}>
      <ImageContainer flexDirection="column" width={['100%', '50%', 'auto']} position="relative" top={[0, 0, '-50px']}>
        <MainImage width={['100%', '100%', '361px']} fluid={images[0].childImageSharp.fluid}></MainImage>
        <Flex flexDirection={'row'} width={'100%'} justifyContent="space-between">
          <DesktopImage
            fluid={images[1].childImageSharp.fluid}
            width={['50%', '50%', '166px']}
            margin="20px 10px 0 0"
          />
          <DesktopImage
            fluid={images[2].childImageSharp.fluid}
            width={['50%', '50%', '166px']}
            margin="20px 0 0 10px"
          />
        </Flex>
      </ImageContainer>
      <Content
        padding={['10px 10px 30px', '10px 10px 30px', '10px 10px 30px 30px']}
        flexDirection={'column'}
        width={['100%', '100%', 'auto']}
        flex={[0, 1, 1]}
      >
        <Title fontSize={['1.6rem', '1.8rem']}>{title}</Title>
        <BulletPointList>
          {bulletPoints &&
            bulletPoints.map(bulletPoint => (
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
