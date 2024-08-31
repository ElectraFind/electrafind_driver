import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';


export default function Recent() {
  return (
    <View style={styles.inputContainer}>
        <Text style={styles.instructionText}>Please ENTER or SCAN charge point reference code</Text>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="Enter Reference" />
          <Ionicons name="qr-code-outline" size={24} color="black" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>START CHARGE</Text>
        </TouchableOpacity>
      </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    padding: 20,
    paddingVertical: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginVertical: 10,
    marginHorizontal: 8,
  },
  instructionText: {
    fontSize: 18,
    marginBottom: 14,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#000000',
    paddingVertical: 20,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
})