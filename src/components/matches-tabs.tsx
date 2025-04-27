import { Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { MatchesResponse } from '@api/matches/matches.api.types'
import { listMatchTypesWithCount } from '@utils/matches.utils'

interface Props {
  matches: MatchesResponse | undefined
  loading: boolean
}

const MatchesTabs = ({ matches, loading }: Props) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const tabs = listMatchTypesWithCount(matches)

  return (
    <FlatList
      data={tabs}
      keyExtractor={(data) => data.type}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => (
        <>
          {item.totalMatches > 0 && (
            <TouchableOpacity
              className="mr-4"
              onPress={() => setSelectedTab(index)}
            >
              <Text
                className={`text-white ${selectedTab === index ? 'font-bold' : ''}`}
              >{`${item.type} (${item.totalMatches})`}</Text>
            </TouchableOpacity>
          )}
        </>
      )}
    />
  )
}

export default MatchesTabs
