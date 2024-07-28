// Context/VehicleContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const VehicleContext = createContext();

export const VehicleProvider = ({ children }) => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    loadVehicles();
  }, []);

  const loadVehicles = async () => {
    try {
      const storedVehicles = await AsyncStorage.getItem('vehicles');
      if (storedVehicles) {
        setVehicles(JSON.parse(storedVehicles));
      }
    } catch (error) {
      console.error('Failed to load vehicles from storage', error);
    }
  };

  const saveVehicles = async (vehicles) => {
    try {
      await AsyncStorage.setItem('vehicles', JSON.stringify(vehicles));
    } catch (error) {
      console.error('Failed to save vehicles to storage', error);
    }
  };

  const addVehicle = (vehicle) => {
    const updatedVehicles = [...vehicles, vehicle];
    setVehicles(updatedVehicles);
    saveVehicles(updatedVehicles);
  };

  return (
    <VehicleContext.Provider value={{ vehicles, addVehicle }}>
      {children}
    </VehicleContext.Provider>
  );
};
