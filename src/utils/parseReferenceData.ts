const parseSubRows = subRows =>
  subRows.map(subrow => ({
    // eslint-disable-next-line @typescript-eslint/camelcase
    scope_of_work: subrow.scope_of_work,
    preview: subrow.file.relativePath,
    download: subrow.file.relativePath
  }))

export const parseReferenceData = graphqlData =>
  graphqlData.data.edges.map(edge => ({
    investor: edge.node.frontmatter.investor,
    // eslint-disable-next-line @typescript-eslint/camelcase
    scope_of_work: edge.node.frontmatter.scope_of_work,
    preview: edge.node.frontmatter.file.relativePath,
    download: edge.node.frontmatter.file.relativePath,
    subRows: parseSubRows(edge.node.frontmatter.scopes_of_work)
  }))
