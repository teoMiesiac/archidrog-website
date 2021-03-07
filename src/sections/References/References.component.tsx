import React, { useReducer } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Flex } from 'reflexbox/styled-components'
import { Section } from '~/components/Section'
import { SectionTitle } from '~/components/SectionTitle'
import { ReferenceTable } from '~/components/ReferenceTable'
import { ModalPDF } from '~/components/ModalPDF'
import { parseReferenceData } from '~/utils'

const query = graphql`
  query {
    data: allMarkdownRemark(filter: { frontmatter: { type: { eq: "references" } } }) {
      edges {
        node {
          frontmatter {
            investor
            scope_of_work
            file {
              relativePath
            }
            scopes_of_work {
              file {
                relativePath
              }
              scope_of_work
            }
          }
        }
      }
    }
  }
`

const initialState = {
  isModalOpen: false,
  srcPDF: ''
}

const SET_SRC_PDF = 'set_src_pdf'
const CLOSE_MODAL = 'close_modal'

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SRC_PDF:
      return { isModalOpen: true, srcPDF: action.payload }
    case CLOSE_MODAL:
      return { isModalOpen: false, srcPDF: '' }
    default:
      throw new Error()
  }
}

const References = (): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { isModalOpen, srcPDF } = state
  const data = useStaticQuery(query)
  const reference = parseReferenceData(data)

  return (
    <Section id="referencje">
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
        <SectionTitle>Referencje</SectionTitle>
        <ReferenceTable data={reference} onPreview={value => dispatch({ type: SET_SRC_PDF, payload: value })} />
      </Flex>
      <ModalPDF isOpen={isModalOpen} src={srcPDF} onClose={() => dispatch({ type: CLOSE_MODAL })} />
    </Section>
  )
}

export default References
