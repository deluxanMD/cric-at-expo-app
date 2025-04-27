import { View, Text, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

import MonospacedText from '@components/monospaced-text'

type Props = {
  title: string
  showNotifications?: boolean
  showSettings?: boolean
  children?: ReactNode
}

const Header = ({
  title,
  showNotifications,
  showSettings,
  children,
}: Props) => {
  return (
    <View className="min-h-40 px-4 bg-primary justify-end">
      <View className="flex-row justify-between">
        <MonospacedText bold white>
          {title}
        </MonospacedText>
        <View className="flex-row">
          {!!showNotifications && (
            <TouchableOpacity>
              <Ionicons
                name="notifications-outline"
                size={20}
                color={'#fff'}
                className="mr-4"
              />
            </TouchableOpacity>
          )}
          {!!showSettings && (
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={20} color={'#fff'} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View className="my-2">{children}</View>
    </View>
  )
}

export default Header
