// VehicleDetail.js
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export default function VehicleDetailProfile({ route }) {

  const navigation = useNavigation();

  const { vehicle } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* <Image source={vehicle?.images?.length > 0 ? { uri: vehicle.images[0] } : null} style={styles.image} /> */}
    <View>
      <View className="relative">
          <Image source={vehicle?.images?.length > 0 ? { uri: vehicle.images[0] } : null} 
          style={styles.image}
          />

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

      <View style={styles.infoContainer}>
        <Text style={styles.title}>{vehicle.name}</Text>
        <Text style={styles.subtitle}>Model: {vehicle.model}</Text>
        <Text style={styles.subtitle}>Manufactured Year: {vehicle.manufacturedYear}</Text>
        <Text style={styles.subtitle}>Registered Year: {vehicle.registeredYear}</Text>
        <Text style={styles.subtitle}>Price: {vehicle.price}</Text>
        <Text style={styles.subtitle}>Range: {vehicle.range}</Text>
        <Text style={styles.subtitle}>Mileage: {vehicle.mileage}</Text>
        <Text style={styles.subtitle}>Description: {vehicle.description}</Text>
        <Text style={styles.subtitle}>Phone Number: {vehicle.phoneNumber}</Text>
        <Text style={styles.subtitle}>Nearest City: {vehicle.nearestCity}</Text>
        <Text style={styles.subtitle}>District: {vehicle.district}</Text>
      </View>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%', height: 300,alignItems:'center',justifyContent:'center',flex:1
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 5,
  },
});
