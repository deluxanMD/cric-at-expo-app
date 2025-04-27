import { MatchesResponse } from './matches.api.types'
import { getResponse } from '..'

export const listLiveMatches = async () => {
  const data = await getResponse<MatchesResponse>('live')

  if (!data) {
    console.log(`Error on getLiveMatches`)
  }

  return data
}
