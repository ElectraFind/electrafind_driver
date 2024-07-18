import { View, Text, Image, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import React, {useContext} from 'react'
import { images } from '../../../constants'
import SearchBar from './SearchBar'
import DistanceSlider from './DistanceSlider'
import IonIcons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { UserLocationContext } from '../../Context/UserLocationContext'

export default function Header() {
  const {location,setLocation}=useContext(UserLocationContext);

  return (
    
      
      <View style={styles.container}>
        
        {/* <Image 
          source={images.logoverticalshort}
          style={{width:250,height:60,objectFit:'contain',}}
        /> */}

        <View style={{display: 'flex',flexDirection:'row',justifyContent:'space-between'}}>
          <TouchableOpacity style={{width:'80%', alignItems:'flex-start', borderColor:'#161622', borderWidth: 1 }}>
            <SearchBar searchedLocation={(location)=>
            setLocation({
              latitude: location.lat,
              longitude: location.lng
            })

            }/>
          </TouchableOpacity>
          <TouchableOpacity>
            <IonIcons name="options-outline" size={30} color="#ffffff" style={{paddingTop:8,paddingLeft:14}}/>
          </TouchableOpacity>
        </View>
        

        {/* <DistanceSlider/> */}

        
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

