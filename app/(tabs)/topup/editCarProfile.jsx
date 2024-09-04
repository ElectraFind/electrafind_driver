import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, TextInput, TouchableOpacity, StyleSheet, Button, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Picker } from '@react-native-picker/picker';

export default function EditCarProfile({ navigation }) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [range, setRange] = useState('');
  const [lastService, setLastService] = useState('');
  const [lastTyre, setLastTyre] = useState('');
  const [numberPlate, setNumberPlate] = useState('');
  const [connectorTypes, setConnectorTypes] = useState({
    Type1: false,
    Type2: false,
    CCS: false,
    CHAdeMO: false,
  });
  const [vehiclePhoto, setVehiclePhoto] = useState(null);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setVehiclePhoto(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    const carDetails = {
      brand,
      model,
      range,
      lastService,
      lastTyre,
      numberPlate,
      connectorTypes: selectedConnectors,
      vehiclePhoto,

    };

    try {
      await AsyncStorage.setItem('carDetails', JSON.stringify(carDetails));
      Alert.alert('Success', 'Car details updated');
      navigation.navigate('carProfile'); // Navigate back to CarProfile
    } catch (error) {
      Alert.alert('Error', 'Failed to save car details');
    }
  };

  const handleCheckboxChange = (type) => {
    setConnectorTypes((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  // Custom checkbox component
  const CustomCheckbox = ({ label, checked, onPress }) => {
    return (
      <TouchableOpacity
        style={styles.checkboxRow}
        onPress={onPress}
      >
        <View style={[styles.checkbox, checked && styles.checkboxChecked]} />
        <Text style={styles.checkboxLabel}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Edit Vehicle Details</Text>

      <Text style={styles.label}>Brand</Text>
      <TextInput style={styles.input} value={brand} onChangeText={setBrand} />

      <Text style={styles.label}>Model</Text>
      <TextInput style={styles.input} value={model} onChangeText={setModel} />

      <Text style={styles.label}>Range (km)</Text>
      <TextInput style={styles.input} value={range} onChangeText={setRange} keyboardType="numeric" />

      <Text style={styles.label}>Last Service (km)</Text>
      <TextInput style={styles.input} value={lastService} onChangeText={setLastService} keyboardType="numeric" />

      <Text style={styles.label}>Last Tyre Changed (km)</Text>
      <TextInput style={styles.input} value={lastTyre} onChangeText={setLastTyre} keyboardType="numeric" />

      {/* Custom checkbox for Connector Types */}
      <Text style={styles.label}>Connector Types</Text>
      <View style={styles.checkboxContainer}>
        <CustomCheckbox
          label="Type 1"
          checked={connectorTypes.Type1}
          onPress={() => handleCheckboxChange('Type1')}
        />
        <CustomCheckbox
          label="Type 2"
          checked={connectorTypes.Type2}
          onPress={() => handleCheckboxChange('Type2')}
        />
        <CustomCheckbox
          label="CCS"
          checked={connectorTypes.CCS}
          onPress={() => handleCheckboxChange('CCS')}
        />
        <CustomCheckbox
          label="CHAdeMO"
          checked={connectorTypes.CHAdeMO}
          onPress={() => handleCheckboxChange('CHAdeMO')}
        />
      </View>

      <Text style={styles.label}>Number Plate</Text>
      <TextInput style={styles.input} value={numberPlate} onChangeText={setNumberPlate} />

      <TouchableOpacity onPress={pickImage} style={styles.imagePicker}>
        {vehiclePhoto ? (
          <Image source={{ uri: vehiclePhoto }} style={styles.vehicleImage} />
        ) : (
          <View style={styles.imagePlaceholder}>
            <Text style={styles.imageText}>Upload Vehicle Photo</Text>
          </View>
        )}
      </TouchableOpacity>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
    fontSize: 14,
  },
  imagePicker: {
    marginBottom: 15,
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  imageText: {
    marginTop: 10,
    color: '#999',
  },
  vehicleImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});
