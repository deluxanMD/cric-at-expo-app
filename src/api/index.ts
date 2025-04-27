import axios, { AxiosResponse } from 'axios'

const url = process.env.EXPO_PUBLIC_API_URL
const api_key = process.env.EXPO_PUBLIC_X_RAPID_API_KEY
const api_host = process.env.EXPO_PUBLIC_X_RAPID_API_HOST

export const getResponse = async <T>(
  extendedUrl: string
): Promise<T | undefined> => {
  try {
    const response: AxiosResponse<T> = await axios.get(
      `${url}/${extendedUrl}`,
      {
        headers: {
          'x-rapidapi-key': api_key,
          'x-rapidapi-host': api_host,
        },
      }
    )

    if (response.status === 200) return response.data
  } catch (error) {
    console.log(`Error: ${error}`)
  }
}
