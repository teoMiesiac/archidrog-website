import React, { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Modal from 'react-modal'
import {
  ControlsContainer,
  PageButton,
  PageButtonLeft,
  IconWrapper,
  Divider,
  Text,
  CloseButton,
  LoadingContainer
} from './ModalPDF.styles'
import './ModalPDF.css'
import { ArrowRight } from '~/components/Icons/ArrowRight'
import { Close } from '~/components/Icons/Close'

Modal.setAppElement(`#___gatsby`)
const style = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 100,
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'center'
  },
  content: {
    outline: 'none'
  }
}

interface Props {
  src: string
  isOpen: boolean
  onClose: () => void
}

const ModalPDF = ({ isOpen, src = '', onClose }: Props) => {
  const [numPages, setNumPages] = useState(0)
  const [pageNumber, setPageNumber] = useState(1)
  const [showControls, setShowControls] = useState<boolean>(false)

  let importedSrc = ''
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    importedSrc = require('~/assets/' + src)
    // eslint-disable-next-line no-empty
  } catch (error) {}

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages)
    setPageNumber(1)
    setShowControls(true)
  }

  const changePage = offset => {
    setPageNumber(prevPageNumber => prevPageNumber + offset)
  }

  const previousPage = () => {
    changePage(-1)
  }

  const nextPage = () => {
    changePage(1)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={style}
      className="document"
      overlayClassName="overlay"
    >
      <Document
        file={importedSrc}
        onLoadSuccess={onDocumentLoadSuccess}
        className="pdf"
        loading={
          <LoadingContainer>
            <ClipLoader color={'#afc90c'} loading={true} size={150} />
          </LoadingContainer>
        }
      >
        <Page pageNumber={pageNumber}>
          {showControls && (
            <>
              <ControlsContainer>
                <Text>
                  Strona &nbsp; &nbsp; {pageNumber || (numPages ? 1 : '--')} &nbsp; / &nbsp; {numPages || '--'}&nbsp;
                </Text>
                <Divider />
                <PageButtonLeft type="button" disabled={pageNumber <= 1} onClick={previousPage}>
                  <IconWrapper>
                    <ArrowRight />
                  </IconWrapper>
                </PageButtonLeft>
                <PageButton type="button" disabled={pageNumber >= numPages} onClick={nextPage}>
                  <IconWrapper>
                    <ArrowRight />
                  </IconWrapper>
                </PageButton>
              </ControlsContainer>
              <CloseButton onClick={onClose}>
                <IconWrapper>
                  <Close />
                </IconWrapper>
              </CloseButton>
            </>
          )}
        </Page>
      </Document>
    </Modal>
  )
}

export default ModalPDF
