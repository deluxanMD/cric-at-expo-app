import { MatchesResponse, MatchTypeEnum } from '@api/matches/matches.api.types'
import { ListMatchType } from '@customtypes/utils'

export const listMatchTypesWithCount = (
  data: MatchesResponse | undefined
): ListMatchType[] => {
  const typeMatches = data?.typeMatches || []
  const filters = data?.filters?.matchType || []

  let matchCountByType = {
    All: 0,
    International: 0,
    League: 0,
    Domestic: 0,
    Women: 0,
  }

  typeMatches.map((typeMatch) => {
    const matchType = typeMatch.matchType
    const seriesMatches = typeMatch.seriesMatches || []

    let totalMatches = 0

    seriesMatches.map((series) => {
      if (
        series.seriesAdWrapper &&
        Array.isArray(series.seriesAdWrapper.matches)
      ) {
        totalMatches += series.seriesAdWrapper.matches.length
      }
    })

    if (matchType in matchCountByType) {
      matchCountByType[matchType] += totalMatches
    }
  })

  const result: ListMatchType[] = [
    {
      type: 'All',
      totalMatches: Object.values(matchCountByType).reduce(
        (sum, count) => sum + count,
        0
      ),
    },
    ...filters.map((type) => ({
      type,
      totalMatches: matchCountByType[type],
    })),
  ]

  return result
}
