import { Text, View } from 'react-native'
import React from 'react'

import Header from '@components/header'

const Home = () => {
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
