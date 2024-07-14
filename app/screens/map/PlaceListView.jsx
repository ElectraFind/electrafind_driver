import { View, Text, FlatList } from 'react-native'
import React from 'react'
import PlaceItem from './PlaceItem'


export default function PlaceListView(placeList) {
  
  return (
    <View>
      <FlatList
        data={placeList}
        renderItem={({item,index})=>(
          <View>
          <PlaceItem/>
        </View>
        )}
      />
    </View>
  )
}