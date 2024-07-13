import { View, Text } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import IonIcons from 'react-native-vector-icons/Ionicons';

export default function SearchBar({searchedLocation}) {
  return (
    <View style={{
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 35,
      borderRadius: 25,
      backgroundColor: '#ffffff',
      borderColor: '#000000',
      backgroundshadowColor: '#ffffff',
    }}>
      
      <IonIcons name="location-sharp" size={24} color="#000000" style={{paddingTop:10}}/>

      <GooglePlacesAutocomplete
      placeholder='Search EV charging station'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true
        
        searchedLocation(details?.geometry?.location);
      }}
      query={{
        key: 'AIzaSyDbkBRNcFZ-9PqE10_PdhhwQMcZaZlEItU',
        language: 'en',
      }}
    />
    </View>
  )
}