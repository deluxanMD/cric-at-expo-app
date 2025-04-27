import { Text, View } from 'react-native'
import React, { useEffect } from 'react'

import Header from '@components/header'
import { useMatchesStore } from '@store/matches/matches.store'
import { listMatchTypesWithCount } from '@utils/matches.utils'
import MatchesTabs from '@components/matches-tabs'

const Home = () => {
  const { liveMatches, liveMatchesLoading, setLiveMatches } = useMatchesStore()

  useEffect(() => {
    setLiveMatches()
  }, [])

  return (
    <View>
      <Header title="cricat" showNotifications showSettings>
        <MatchesTabs matches={liveMatches} loading={liveMatchesLoading} />
      </Header>
      <Text>Home</Text>
    </View>
  )
}

export default Home
