import { View, Text } from 'react-native'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  bold?: boolean
  white?: boolean
}

const MonospacedText = ({
  children,
  bold = false,
  white = false,
  ...props
}: Props) => {
  const classNames = []

  if (bold) classNames.push('font-bold')
  if (white) classNames.push('text-white')

  return (
    <View>
      <Text className={`font-mono text-2xl ${classNames.join(' ')}`} {...props}>
        {children}
      </Text>
    </View>
  )
}

export default MonospacedText
