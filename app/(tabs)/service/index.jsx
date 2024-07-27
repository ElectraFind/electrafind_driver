import { Text, View, Image, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import ServiceStations from '../../screens/service/ServiceStationsList';
import Mechanics from '../../screens/service/MechanicsList';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../../../constants';
import { Ionicons } from '@expo/vector-icons';
import * as Haptics from 'expo-haptics';

export default function ServiceScreen() {
  const [activeButton, setActiveButton] = useState('Service Stations');
  const [searchQuery, setSearchQuery] = useState('');

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleSearch = () => {
    // Implement search functionality here
    console.log('Search query:', searchQuery);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      
      <View style={styles.headerContainer}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Garages and Mechanics"
            placeholderTextColor="#ffffff"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity style={styles.searchButton} onPress={handleSearch}>
            <Ionicons name="search" size={24} color="#ffffff" />
          </TouchableOpacity>
          {searchQuery.length > 0 && (
            <TouchableOpacity style={styles.clearButton} onPress={handleClearSearch}>
              <Ionicons name="close" size={24} color="#ffffff" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={{flexDirection: "row", justifyContent: "center", marginTop: 10,marginHorizontal: 25, backgroundColor: "#E9E9E9", borderRadius: 20, borderWidth: 2,borderColor: "#000000", minHeight:60  }} className={'space-x-4'}>
        <TouchableOpacity
          style={{flex: 1,alignItems:'center',justifyContent: 'center',paddingVertical: 15,  paddingHorizontal:20,  margin: 2, backgroundColor: activeButton === "Service Stations" ? "#000000" : "transparent", borderRadius: activeButton === "Service Stations" ? 18 : 0}}
          onPress={() => handleButtonPress('Service Stations')}
        >
          <Text
            style={{color: activeButton === "Service Stations" ? "#fff" : "#000",}} className={"font-psemibold"}
          >
            Service Stations
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{flex:1,alignItems: 'center',justifyContent: 'center',paddingVertical: 15, paddingHorizontal:20,  margin: 2, backgroundColor: activeButton === "Mechanics" ? "#000000" : "transparent", borderRadius: activeButton === "Mechanics" ? 18 : 0}}
          onPress={() => handleButtonPress('Mechanics')}
        >
          <Text
             style={{color: activeButton === "Mechanics" ? "#fff" : "#000",}} className={"font-psemibold"}
          >
            Mechanics
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.contentContainer}>
        {activeButton === 'Service Stations' && (
          <View style={styles.listContainer}>
            <ServiceStations searchQuery={searchQuery} />
          </View>
        )}

        {activeButton === 'Mechanics' && (
          <View style={styles.listContainer}>
            <Mechanics searchQuery={searchQuery} />
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
  headerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    alignContent: 'center',
    backgroundColor: '#000000',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#333333',
    borderWidth: 1,
    borderColor: '#c2c2c2',
    borderRadius: 30,
    padding: 10,
    marginHorizontal: 16,
    marginTop: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 8,
    shadowOffset: {
      width: 1,
      height: 1,
    },
  },
  searchInput: {
    flex: 1,
    paddingHorizontal: 10,
    color: '#ffffff',
  },
  searchButton: {
    backgroundColor: '#000000',
    borderRadius: 20,
    padding: 5,
    marginLeft: 5,
  },
  clearButton: {
    backgroundColor: '#000000',
    borderRadius: 20,
    padding: 5,
    marginLeft: 5,
  },
  contentContainer: {
    flex: 1,
    marginTop:0,
    flexGrow: 1,
    justifyContent: 'flex-start',   
    alignItems: 'center',
    paddingVertical: 25,
  },
  listContainer: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
  },
});
