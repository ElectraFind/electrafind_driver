import { View, Text, Image } from 'react-native'
import { StyleSheet } from 'react-native'
import React from 'react'
import { images } from '../../../constants'
import SearchBar from './SearchBar'
import DistanceSlider from './DistanceSlider'

export default function Header() {
  return (
    <View style={styles.container}>
      <Image 
        source={images.logoverticalshort}
        style={{width:250,height:60,objectFit:'contain',}}
      />
      <SearchBar searchedLocation={(location)=>console.log(location)}/>

      <DistanceSlider/>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  }
})

