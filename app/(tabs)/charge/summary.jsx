import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function SummaryScreen({ route }) {
  const { totalTime, totalCost } = route.params; // Receive total time and cost from TimerScreen
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charging Summary</Text>
      <Text style={styles.summaryText}>Total Time: {totalTime} minutes</Text>
      <Text style={styles.summaryText}>Total Cost: Rs. {totalCost.toFixed(2)}</Text>
      <TouchableOpacity style={styles.doneButton} onPress={() => navigation.navigate('index')}>
        <Text style={styles.doneButtonText}>Done</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Thank you for doing business with us</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 40,
    width: '80%',
  },
  summaryText: {
    fontSize: 18,
    marginBottom: 10,
  },
  doneButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 30,
  },
  doneButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
