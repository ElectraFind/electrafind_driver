import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native';

//render the ev charging stations details and make a profile for each charging station

export default function ChargingStationProfile() {

  const route = useRoute();
  const { place } = route.params;
  console.log('charging: ',place);

  return (
    <View>
      <ScrollView>
        <View className="relative">
          
        </View>
      </ScrollView>
    </View>
  )
}