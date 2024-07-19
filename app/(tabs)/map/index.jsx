import {  ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useContext, useEffect, useState } from 'react'
import { UserLocationContext } from '../../Context/UserLocationContext'
import GlobalApi from '../../Utils/GlobalApi'

import React from 'react'
import AppMapView from '../../screens/map/AppMapView'
import Header from '../../screens/map/Header'
import { StyleSheet } from 'react-native'
import SearchBar from '../../screens/map/SearchBar'
import PlaceListView from '../../screens/map/PlaceListView'
import { SelectMarkerContext } from '../../Context/SelectMarkerContext'


export default function MapScreen() {

  const {location,setLocation}=useContext(UserLocationContext);
  const [placeList,setPlaceList]=useState([]);
  const [selectedMarker,setSelectedMarker]=useState([]);

  //newly added
  const [isMarkerTouched, setIsMarkerTouched] = useState(false);
  
  // useEffect(() => {
  //   // location&&GetNearByPlace();
  //   if(location){

  //     GetNearByPlace(location);
  //   }
  // }, [location])

  useEffect(()=>{
    location&&GetNearByPlace();
  },[location])

  const GetNearByPlace=()=>{
    const data={
      "includedTypes": ["electric_vehicle_charging_station"],
      "maxResultCount": 10,
      "locationRestriction": {
        "circle": {
          "center": {
            "latitude": location?.latitude,
            "longitude": location?.longitude
          },
          "radius": 25000.0
        }
      }
    }


    GlobalApi.NewNearByPlace(data).then(resp=>{
      // console.log(resp);
      console.log(JSON.stringify(resp.data));
      setPlaceList(resp.data?.places)
    })
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <SelectMarkerContext.Provider value={{selectedMarker, setSelectedMarker, isMarkerTouched, setIsMarkerTouched, }}>
      <View>
          <View style={styles.headerContainer}>
            <Header/>
          </View>
          
          {placeList&& <AppMapView placeList={placeList}/>}

          <View style={styles.placeListContainer}>
            {placeList&&<PlaceListView placeList={placeList}/>}
          </View>
          
      </View>
      </SelectMarkerContext.Provider>
    </SafeAreaView>
    
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    position: 'absolute',
    zIndex: 10,
    padding: 40,
    width: '100%',
    paddingHorizontal: 10,
    height: 120,
    backgroundColor: '#161622'
    
  },

  safeArea: {
    flex: 1,
    
  },
  container: {
    flex: 1,
  },

  placeListContainer:{
    position: 'absolute',
    bottom: 0,
    zIndex: 10,
    width: '100%'
  }
  
})



