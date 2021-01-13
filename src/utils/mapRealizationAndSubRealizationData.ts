import { Realization, SubRealization } from '~/models/Realization'

export const extractSubRealizationsData = (data): SubRealization[] =>
  data.subRealizations.edges.map(edge => edge.node.frontmatter)

export const mapRealizationAndSubRealizationData = (data): Realization[] => {
  const subRealizationsData = extractSubRealizationsData(data)
  const realizations = data.realizations.edges.map(edge => {
    const title = edge.node.frontmatter.title
    const subRealizations = edge.node.frontmatter.sub_realizations.map(subRealization =>
      subRealizationsData.find(sub => {
        return sub.title === subRealization
      })
    )
    return {
      title,
      subRealizations
    }
  })

  return realizations
}
