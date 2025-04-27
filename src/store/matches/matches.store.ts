import { create } from 'zustand'
import { MatchesState } from './matches.store.types'
import { listLiveMatches } from '@api/matches/matches.api'
import { MatchType } from '@api/matches/matches.api.types'

export const useMatchesStore = create<MatchesState>((set) => ({
  liveMatches: undefined,
  liveMatchesError: false,
  liveMatchesLoading: false,
  selectedTab: 'All',
  setLiveMatches: async () => {
    set(() => ({ liveMatchesLoading: true }))

    const data = await listLiveMatches()
    if (!data) set(() => ({ liveMatchesError: true }))
    set(() => ({ liveMatches: data }))

    set(() => ({ liveMatchesLoading: false }))
  },
  setSelectedTab: (tab: MatchType | 'All') => set(() => ({ selectedTab: tab })),
}))
