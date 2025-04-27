import { Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MatchesResponse } from '@api/matches/matches.api.types'
import { listMatchTypesWithCount } from '@utils/matches.utils'
import { useMatchesStore } from '@store/matches/matches.store'

interface Props {
  matches: MatchesResponse | undefined
  loading: boolean
}

const MatchesTabs = ({ matches, loading }: Props) => {
  const [index, setIndex] = useState(0)
  const tabs = listMatchTypesWithCount(matches)
  const { setSelectedTab } = useMatchesStore()

  const handlePress = (index: number) => {
    setIndex(index)
    setSelectedTab(tabs[index].type)
  }

  return (
    <FlatList
      data={tabs}
      keyExtractor={(data) => data.type}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index: i }) => (
        <>
          {item.totalMatches > 0 && (
            <TouchableOpacity className="mr-4" onPress={() => handlePress(i)}>
              <Text
                className={`text-white ${index === i ? 'font-bold' : ''}`}
              >{`${item.type} (${item.totalMatches})`}</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    />
  )
}

export default MatchesTabs
