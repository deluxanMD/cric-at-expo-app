import { MatchesResponse, MatchType } from '@api/matches/matches.api.types'

export interface MatchesState {
  liveMatches: MatchesResponse | undefined
  liveMatchesError: boolean
  liveMatchesLoading: boolean
  selectedTab: MatchType | 'All'
  setLiveMatches: () => Promise<void>
  setSelectedTab: (tab: MatchType | 'All') => void
}
