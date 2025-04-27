export type MatchType = 'International' | 'League' | 'Domestic' | 'Women'

type MatchFormat = 'TEST' | 'ODI' | 'T20'

type MatchState = 'Complete' | 'Stumps'

export enum MatchTypeEnum {
  International = 'International',
  League = 'League',
  Domestic = 'Domestic',
  Women = 'Women',
}

interface Team {
  teamId: number
  teamName: string
  teamSName: string
  imageId: number
}

interface VenueInfo {
  id: number
  ground: string
  city: string
  timezone: string
  latitude: string
  longitude: string
}

interface Innings {
  inningsId: number
  runs: number
  wickets: number
  overs: number
}

interface TeamScore {
  inngs1?: Innings
  inngs2?: Innings
}

interface MatchInfo {
  matchId: number
  seriesId: number
  seriesName: string
  matchDesc: string
  matchFormat: MatchFormat
  startDate: string
  endDate: string
  state: MatchState
  status: string
  team1: Team
  team2: Team
  venueInfo: VenueInfo
  currBatTeamId: number
  seriesStartDt: string
  seriesEndDt: string
  isTimeAnnounced: boolean
  stateTitle: string
}

interface MatchScore {
  team1Score?: TeamScore
  team2Score?: TeamScore
}

interface Match {
  matchInfo: MatchInfo
  matchScore: MatchScore
}

interface SeriesMatch {
  seriesAdWrapper: {
    seriesId: number
    seriesName: string
    matches: Match[]
  }
}

interface TypeMatch {
  matchType: MatchType
  seriesMatches: SeriesMatch[]
}

export interface MatchesResponse {
  typeMatches: TypeMatch[]
  filters: {
    matchType: MatchTypeEnum[]
  }
}
