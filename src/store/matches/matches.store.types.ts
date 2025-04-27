import { MatchesResponse } from '@api/matches/matches.api.types'

export interface MatchesState {
  liveMatches: MatchesResponse | undefined
  liveMatchesError: boolean
  liveMatchesLoading: boolean
  setLiveMatches: () => Promise<void>
}
