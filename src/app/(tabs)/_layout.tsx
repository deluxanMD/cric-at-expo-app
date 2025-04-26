import { Tabs } from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerTitleAlign: 'left',
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
          headerTitleAlign: 'left',
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
          headerTitleAlign: 'left',
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
          headerTitleAlign: 'left',
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
          headerTitleAlign: 'left',
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? 'newspaper' : 'newspaper-outline'}
              size={20}
            />
          ),
        }}
      />
    </Tabs>
  )
}
