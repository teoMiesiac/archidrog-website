import React, { useState, useEffect, useRef } from 'react'
import Fade from 'react-reveal/Slide'
import { Realization as IRealization } from '~/models'
import { Wrapper, List, ListItem, Text } from './RealizationsDesktop.styles'
import { CarouselRealizationDesktop } from '~/components/CarouselRealizationDesktop'

interface Props {
  realizations: IRealization[]
}

const RealizationsDesktop = ({ realizations }: Props): JSX.Element => {
  const [selectedRealization, setSelectedRealization] = useState<IRealization>({} as IRealization)
  const [listWidth, setListWidth] = useState(0)

  const container = useRef<HTMLUListElement>(null)

  useEffect(() => {
    setSelectedRealization(realizations[0])
  }, [realizations])

  useEffect(() => {
    const calculateWidth = async () => {
      const currentContainer = container.current
      if (currentContainer instanceof HTMLElement) {
        try {
          /* eslint-disable */
          // @ts-ignore
          document.fonts.ready.then(function() {
            /* eslint-enable */
            setListWidth(currentContainer.scrollWidth + 160)
          })
        } catch (err) {
          console.log(err.message)
          // set default value for browsers that do not support the listener
          setListWidth(500)
        }
      }
    }
    calculateWidth()
  }, [])

  return (
    <Wrapper flexDirection="row" marginTop={['15px', '15px', '30px']}>
      <List ref={container} width={listWidth}>
        <Fade left duration={1500}>
          {realizations.map(realization => (
            <ListItem key={realization.title} onClick={() => setSelectedRealization(realization)}>
              <Text active={realization.title === selectedRealization.title}>{realization.title}</Text>
            </ListItem>
          ))}
        </Fade>
      </List>
      {selectedRealization.title && (
        <CarouselRealizationDesktop
          subRealizations={selectedRealization?.subRealizations}
          realizationTitle={selectedRealization?.title}
        ></CarouselRealizationDesktop>
      )}
    </Wrapper>
  )
}

export default RealizationsDesktop
