import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import images from '../../../constants/images';


const serviceStations = [
  { id: '1', name: 'Service Station A', address: '123 Main St, City A', review: 4.6, image: images.servicestation1, about: 'About Service Station A...' },
  { id: '2', name: 'Service Station B', address: '456 reid St, City B', review: 4.2, image: images.servicestation2, about: 'About Service Station B...' },
  { id: '3', name: 'Service Station C', address: '456 Elm St, City C', review: 4.1, image: images.servicestation3, about: 'About Service Station C...' },
  { id: '4', name: 'Service Station D', address: '456 Elm St, City D', review: 4.3, image: images.servicestation4, about: 'About Service Station D...' },
  { id: '5', name: 'Service Station E', address: '456 Elm St, City E', review: 4.7, image: images.servicestation5, about: 'About Service Station E...' },
  { id: '6', name: 'Service Station F', address: '456 Elm St, City F', review: 4.4, image: images.servicestation6, about: 'About Service Station F...' },
  
];

const ServiceStationsList = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {serviceStations.map((station) => (
        <TouchableOpacity
          key={station.id}
          style={styles.card}
          onPress={() => navigation.navigate('Profile', station)}
        >
          <Image source={station.image} style={styles.image} />
          <View style={styles.cardContent}>
            <Text style={styles.name}>{station.name}</Text>
            <Text style={styles.address}>{station.address}</Text>
            <View style={styles.reviewContainer}>
              <Text style={styles.review}>⭐ {station.review}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#E9E9E9', padding: 10, height: 620 },
  card: { backgroundColor: '#ffffff', borderRadius: 10, flexDirection: 'row', alignItems: 'center', marginBottom: 20, padding: 5, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.3, shadowRadius: 5, elevation: 5 },
  image: { width: 100, height: 100, resizeMode: 'contain', marginRight: 15 },
  cardContent: { flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold', color: '#000' },
  address: { fontSize: 14, color: '#333', marginVertical: 5 },
  reviewContainer: { flexDirection: 'row', alignItems: 'center' },
  review: { fontSize: 14, color: '#FFD700' },
});

export default ServiceStationsList;
