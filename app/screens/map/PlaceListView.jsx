import { View, Text, FlatList} from 'react-native'
import React, { useEffect, useRef, useContext } from 'react'
import PlaceItem from './PlaceItem'
import Dimentions from 'react-native/Libraries/Utilities/Dimensions'

import { SelectMarkerContext } from '../../Context/SelectMarkerContext'



export default function PlaceListView({placeList}) {

  const flatListRef=useRef(null);
  const {selectedMarker,setSelectedMarker}=useContext(SelectMarkerContext);

  useEffect(() => {
    if (selectedMarker !== null && placeList.length > selectedMarker) {
      scrollToIndex(selectedMarker);
    }
  }, [selectedMarker, placeList]);

  const scrollToIndex=(index)=>{
    flatListRef.current?.scrollToIndex({animated:true,index});
  }

  const getItemLayout = (_,index) => ({
    length:Dimentions.get('window').width,
    offset:Dimentions.get('window').width*index+1,
    index  
  });
  
  return (
    <View>
      <FlatList
        data={placeList}
        horizontal={true}
        pagingEnabled
        ref={flatListRef}
        getItemLayout={getItemLayout}
        showsHorizontalScrollIndicator={false}
        renderItem={({item,index})=>(
        <View key={index}>
          <PlaceItem place={item}/>
        </View>
        )}
      />
    </View>
  )
}