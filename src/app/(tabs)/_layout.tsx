import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function TabLayout() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'home-sharp' : 'home-outline'}
                size={20}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="live"
          options={{
            title: 'Live',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'bowling-ball' : 'bowling-ball-outline'}
                size={20}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="series"
          options={{
            title: 'Series',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'trophy-sharp' : 'trophy-outline'}
                size={20}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="videos"
          options={{
            title: 'Videos',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'videocam' : 'videocam-outline'}
                size={20}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="news"
          options={{
            title: 'News',
            headerShown: false,
            tabBarIcon: ({ focused }) => (
              <Ionicons
                name={focused ? 'newspaper' : 'newspaper-outline'}
                size={20}
              />
            ),
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
