import axios, { AxiosResponse } from 'axios'
import { MatchesResponse, MatchTypeEnum } from './matches.api.types'
import { getResponse } from '..'

const url = process.env.EXPO_PUBLIC_API_URL
const api_key = process.env.EXPO_PUBLIC_X_RAPID_API_KEY
const api_host = process.env.EXPO_PUBLIC_X_RAPID_API_HOST

export const listLiveMatches = async () => {
  const data = await getResponse<MatchesResponse>('live')

  if (!data) {
    console.log(`Error on getLiveMatches`)
  }

  return data
}
