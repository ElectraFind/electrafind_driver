import { View, Text, Image ,Button} from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useRoute } from '@react-navigation/native';
import GlobalApi from '../../Utils/GlobalApi';
import images from '../../../constants/images';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


//render the ev charging stations details and make a profile for each charging station

export default function ChargingStationProfile() {

  const PLACE_PHOTO_BASE_URL = "https://places.googleapis.com/v1/"

  const navigation = useNavigation();

  const route = useRoute();
  const { place } = route.params;
  console.log('charging: ',place);

  return (
    <View>
      <ScrollView>
        <View className="relative">
          <Image source={ place?.photos?
              {uri:PLACE_PHOTO_BASE_URL + place?.photos[7]?.name+"/media?key="+GlobalApi?.API_KEY1+"&maxHeightPx=800&maxWidthPx=1200"}
            :(images.evchargingstation)}
            style={{width: '100%', height: 300,alignItems:'center',justifyContent:'center',flex:1}}/>

            <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', top: 35, left: 5, }} activeOpacity={0.7} className={'p-2'}>
              <Ionicons
                name={"arrow-back-outline"}
                resizeMode="contain"
                color={"#ffffff"}
                size={30}
                style={{padding: 3, backgroundColor: '#161622', borderRadius: 30, opacity: 0.7,
                }}
              />
            </TouchableOpacity>

        </View>

        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}} className="bg-white -mt-10 pt-7">
          <View className="px-5 mb-2">
            <Text className="text-3xl font-bold">{place.displayName?.text}</Text>
            <View className="flex-row items-center space-x-1">
              <Ionicons name="location" color="gray" width="20" height="20"/>
              <Text style={{color:"gray",fontSize:15}} className="font-pmedium">Nearby . {place?.formattedAddress}</Text>
            </View>
          </View>
        </View>

        <View>
          
        </View>
      </ScrollView>
    </View>
  )
}