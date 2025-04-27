import { MatchTypeEnum } from '@api/matches/matches.api.types'

export interface ListMatchType {
  type: MatchTypeEnum | 'All'
  totalMatches: number
}
