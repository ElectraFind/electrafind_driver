// VehicleCard.js
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import images from '../../../constants/images';

const screenWidth = Dimensions.get('screen').width;

export default function VehicleCard({ vehicle, onPress }) {
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={() => onPress(vehicle)}>
      <LinearGradient colors={['transparent', '#ffffff']}>
        <Image
          source={vehicle?.images?.length > 0 ? { uri: vehicle.images[0] } : images.carImage}
          style={styles.image}
        />
        <View style={styles.infoContainer}>
          <View className="flex-row items-center space-x-1 mt-2">
            <Text style={styles.title}>{vehicle.name}</Text>
            <Text style={styles.title}>{vehicle.model}</Text>
          </View>
          <Text style={styles.subtitle}>{vehicle.district}</Text>
          <Text style={styles.subtitle}>{vehicle.manufacturedYear}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: screenWidth * 0.90,
    backgroundColor: '#ffffff',
    marginVertical: 5, // Adjust the vertical margin to control spacing between cards
    borderRadius: 10,
    padding: 0,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  infoContainer: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#666',
    fontSize: 15,
  },
});
