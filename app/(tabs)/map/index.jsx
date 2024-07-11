import {  Text, View } from 'react-native'
import React from 'react'
import AppMapView from '../../screens/map/AppMapView'
import Header from '../../screens/map/Header'
import { StyleSheet } from 'react-native'
import SearchBar from '../../screens/map/SearchBar'

export default function MapScreen() {
  return (
    <View>
      <View style={styles.headerContainer}>
        <Header/>
      </View>
      <AppMapView/>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer:{
    position:'absolute',
    zIndex:10,
    padding:40,
    width:'100%',
    paddingHorizontal:10,
    height: "25%",
    backgroundColor: '#161622',
    
  }
})



