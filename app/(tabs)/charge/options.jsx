import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function Options() {

  const navigation = useNavigation();

  const handlePress = (time) => {
    Alert.alert(
      'Confirm Charge',
      `Are you sure you want to start a ${time} charge?`,
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Confirm', onPress: () => startCharge(time) },
      ]
    );
  };

  const startCharge = (time) => {
    // Logic to start the charge, e.g., navigate to another screen or update state
    navigation.navigate('timer', { time: parseInt(time) });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Charging Time</Text>

      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('15 Minutes')}>
          <Text style={styles.buttonText}>15 min</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('30 Minutes')}>
          <Text style={styles.buttonText}>30 min</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subcontainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('45 Minutes')}>
          <Text style={styles.buttonText}>45 min</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => handlePress('60 Minutes')}>
          <Text style={styles.buttonText}>60 min</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '47%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

  subcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
});
