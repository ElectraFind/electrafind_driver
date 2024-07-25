import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderMarketForm from '../../screens/topup/HeaderMarketForm';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';

export default function MarketPlace() {

  const [vehicleName, setVehicleName] = useState('');
  const [vehicleModel, setVehicleModel] = useState('');
  const [manufacturedYear, setManufacturedYear] = useState('');
  const [registeredYear, setRegisteredYear] = useState('');
  const [vehiclePrice, setVehiclePrice] = useState('');
  const [vehicleRange, setVehicleRange] = useState('');
  const [vehicleDescription, setVehicleDescription] = useState('');
  const [userPhoneNumber, setUserPhoneNumber] = useState('');
  const [nearestCity, setNearestCity] = useState('');
  const [district, setDistrict] = useState('');
  const [vehicleCategory, setVehicleCategory] = useState('e-car');
  const [images, setImages] = useState([]);

  const handleSellVehicle = () => {
    // Handle the form submission logic here
    console.log('Vehicle Name:', vehicleName);
    console.log('Vehicle Model:', vehicleModel);
    console.log('Manufactured Year:', manufacturedYear);
    console.log('Registered Year:', registeredYear);
    console.log('Vehicle Price:', vehiclePrice);
    console.log('Vehicle Range:', vehicleRange);
    console.log('Vehicle Description:', vehicleDescription);
    console.log('User Phone Number:', userPhoneNumber);
    console.log('Nearest City:', nearestCity);
    console.log('District:', district);
    console.log('Vehicle Category:', vehicleCategory);
    console.log('Images:', images);

    Alert.alert('Form Submitted', 'Your vehicle has been listed for sale.');
  };

  const pickImage = async () => {
    if (images.length >= 3) {
      Alert.alert('Limit Reached', 'You can upload a maximum of 3 images.');
      return;
    }
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImages([...images, result.assets[0].uri]);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.headerContainer}>
        <HeaderMarketForm />
      </View>
      
        <View style={styles.textContainer}>
          <Text style={styles.text} className={'font-pbold'}>
            Sell your Electric Vehicle and Accessories on our platform
          </Text>
        </View>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
      
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Vehicle Name"
            value={vehicleName}
            onChangeText={setVehicleName}
          />
          <TextInput
            style={styles.input}
            placeholder="Vehicle Model"
            value={vehicleModel}
            onChangeText={setVehicleModel}
          />
          <TextInput
            style={styles.input}
            placeholder="Manufactured Year"
            value={manufacturedYear}
            onChangeText={setManufacturedYear}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Registered Year"
            value={registeredYear}
            onChangeText={setRegisteredYear}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Vehicle Price"
            value={vehiclePrice}
            onChangeText={setVehiclePrice}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Range in KMs"
            value={vehicleRange}
            onChangeText={setVehicleRange}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            value={userPhoneNumber}
            onChangeText={setUserPhoneNumber}
            keyboardType="phone-pad"
          />
          <TextInput
            style={styles.input}
            placeholder="Nearest City"
            value={nearestCity}
            onChangeText={setNearestCity}
          />
          <TextInput
            style={styles.input}
            placeholder="District"
            value={district}
            onChangeText={setDistrict}
          />
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={vehicleCategory}
              onValueChange={(itemValue) => setVehicleCategory(itemValue)}
              style={styles.picker}
            >
              <Picker.Item label="E-Car" value="e-car" />
              <Picker.Item label="E-Bike" value="e-bike" />
              <Picker.Item label="E-Cycle" value="e-cycle" />
            </Picker>
          </View>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Vehicle Description"
            value={vehicleDescription}
            onChangeText={setVehicleDescription}
            multiline
          />
          <View style={styles.imageContainer}>
            {images.map((image, index) => (
              <Image key={index} source={{ uri: image }} style={styles.image} />
            ))}
          </View>
          <TouchableOpacity style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleSellVehicle}>
            <Text style={styles.buttonText}>Sell Vehicle</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: '#161622',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    marginTop: 20, // Adjust this value as needed to control the space between header and text
    paddingHorizontal: 20, // Add some padding for better text appearance
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  },
  formContainer: {
    width: '100%',
    maxWidth: 400,
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    borderRadius: 5,
  },
  textArea: {
    height: 100,
  },
  pickerContainer: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 5,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    width: '100%',
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000000',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
