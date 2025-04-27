import { Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import Header from '@components/header'
import { listLiveMatches } from 'src/api/matches/matches.api'
import { MatchesResponse } from 'src/api/matches/matches.api.types'

const Home = () => {
  const [liveMatches, setLiveMatches] = useState<MatchesResponse>()
  const [error, setError] = useState<boolean>()

  useEffect(() => {
    listLiveMatches()
      .then((data) => setLiveMatches(data))
      .catch((_error) => setError(true))
  }, [])

  return (
    <View>
      <Header title="cricat" showNotifications showSettings>
        <Text>tabs comes here</Text>
      </Header>
      <Text>Home</Text>
    </View>
  )
}

export default Home
