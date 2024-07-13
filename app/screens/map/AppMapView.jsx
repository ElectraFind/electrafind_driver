import { View, Text , Image} from 'react-native'
import React from 'react'
import { StyleSheet} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {images} from '../../../constants';
import MapViewStyle from '../../Utils/MapViewStyle'



export default function AppMapView() {
  return (
    <View>
      <MapView style={styles.map}
      //for the android
        provider="google"
        customMapStyle={MapViewStyle}
        showsUserLocation={true}
        initialRegion={{
          //change to the location of the user
          latitude: 6.9022,
          longitude: 79.8612,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        >
          <Marker
            coordinate={{
              latitude: 6.9022,
              longitude: 79.8612,
              //change to the location of the user
            }}
            
            description="Your Location"
          >
            {/* <Image source={require('../../assets/images/car-marker.png')} style={{height: 50, width: 50}} /> */}
            <Image source={images.carMarker} style={{height: 80, width: 80}} />
          </Marker>

        </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
  
});

