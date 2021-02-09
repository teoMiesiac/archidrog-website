/* eslint-disable react/jsx-key */
import React, { useMemo } from 'react'
import { useTable, useExpanded } from 'react-table'
import { Wrapper } from './ReferenceTable.styles'
import { ArrowDown } from '~/components/Icons/ArrowDown'
import { ArrowRight } from '~/components/Icons/ArrowRight'
import { ExpanderWrapper, Table, TR, TH, THead, TD, Text, Bold, ButtonWrapper, DIV } from './ReferenceTable.styles'
import { ButtonDownload, ButtonDownloadType } from '~/components/ButtonDownload'
import { ButtonPreview, ButtonPreviewType } from '~/components/ButtonPreview'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

interface Props {
  data: Reference
}

export interface Reference {
  investor: string
  sub: ScopeOfWork[]
}

export interface ScopeOfWork {
  work: string
  file: {
    relativePath: string
  }
}

const RenderCell = ({ headerId, value }): JSX.Element => {
  switch (headerId) {
    case 'investor':
      return (
        <Text>
          <Bold>{value}</Bold>
        </Text>
      )
    case 'scope_of_work':
      return <Text>{value}</Text>
    case 'preview':
      return (
        <ButtonWrapper>
          <ButtonPreview mode={ButtonPreviewType.SECONDARY} href={value} fontSize={['1.4rem']} />
        </ButtonWrapper>
      )
    case 'download':
      return <ButtonDownload mode={ButtonDownloadType.SECONDARY} href={value} fontSize={['1.4rem']} />
    default:
      return <></>
  }
}

const TableComponent = ({ columns: userColumns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { expanded }
  } = useTable(
    {
      columns: userColumns,
      data
    },
    useExpanded // Use the useExpanded plugin hook
  )
  console.log(data)
  return (
    <Table {...getTableProps()}>
      <THead>
        {headerGroups.map(headerGroup => (
          <TR {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <TH {...column.getHeaderProps()}>{column.render('Header')}</TH>
            ))}
          </TR>
        ))}
      </THead>
      <TransitionGroup component="tbody" className="todo-list" {...getTableBodyProps()}>
        {rows.map((row, i) => {
          console.log(row.id, i)
          prepareRow(row)
          return (
            <CSSTransition key={row.id} timeout={500} classNames="fade">
              <React.Fragment {...row.getRowProps()}>
                <TR {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <TD {...cell.getCellProps()}>
                        <DIV className="animate">
                          {cell.column.id === 'expander'
                            ? cell.render('Cell')
                            : RenderCell({ headerId: cell.column.id, value: cell.value })}
                        </DIV>
                      </TD>
                    )
                  })}
                </TR>
              </React.Fragment>
            </CSSTransition>
          )
        })}
      </TransitionGroup>
    </Table>
  )
}

const ReferenceTable = ({ data }: Props): JSX.Element => {
  const columns = useMemo(
    () => [
      {
        // Build our expander column
        id: 'expander', // Make sure it has an ID
        // eslint-disable-next-line react/display-name
        // eslint-disable-next-line react/display-name
        Cell: ({ row }) =>
          // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
          // to build the toggle for expanding a row
          row.canExpand ? (
            <span
              {...row.getToggleRowExpandedProps({
                style: {
                  // We can even use the row.depth property
                  // and paddingLeft to indicate the depth
                  // of the row
                  paddingLeft: `${row.depth * 2}rem`
                }
              })}
            >
              {row.isExpanded ? (
                <ExpanderWrapper>
                  <ArrowDown />
                </ExpanderWrapper>
              ) : (
                <ExpanderWrapper>
                  <ArrowRight />
                </ExpanderWrapper>
              )}
            </span>
          ) : null
      },
      {
        Header: 'Inwestor',
        accessor: 'investor'
      },
      {
        Header: 'Zakres Prac',
        accessor: 'scope_of_work'
      },
      {
        Header: 'Podgląd',
        accessor: 'preview'
      },
      {
        Header: 'Pobierz',
        accessor: 'download'
      }
    ],
    []
  )

  return (
    <Wrapper>
      <TableComponent columns={columns} data={data} />
    </Wrapper>
  )
}

export default ReferenceTable
