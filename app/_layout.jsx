import { Platform, Text, View, StyleSheet } from 'react-native';
import React, { useState, useEffect } from 'react';
import { SplashScreen, Stack } from 'expo-router'
import { useFonts} from 'expo-font'
import * as Location from 'expo-location'
import UserLocationContext from './Context/UserLocationContext'
import { ClerkProvider, ClerkLoaded, SignedOut,SignedIn } from "@clerk/clerk-expo"
import { StatusBar } from 'expo-status-bar';
import SignIn from './(auth)/sign-in'
import { Slot } from "expo-router"
import * as SecureStore from 'expo-secure-store';



SplashScreen.preventAutoHideAsync()

const RootLayout = () => {

  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      console.log(location)
      
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  

  const [fontsLoaded,error] = useFonts({
    "Poppins-Black": require("../assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-ExtraBold": require("../assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-ExtraLight": require("../assets/fonts/Poppins-ExtraLight.ttf"),
    "Poppins-Light": require("../assets/fonts/Poppins-Light.ttf"),
    "Poppins-Medium": require("../assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("../assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Thin": require("../assets/fonts/Poppins-Thin.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  return(
    // <UserLocationContext.Provider value={{location,setLocation}}>

    <ClerkProvider publishableKey={'pk_test_cnVsaW5nLXN0dWQtNi5jbGVyay5hY2NvdW50cy5kZXYk'}>
      <ClerkLoaded>
      {/* <Stack>
        
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{headerShown: false}} />
        <Stack.Screen name="splashscreen" options={{headerShown: false}} />
        <Stack.Screen name="(tabs)" options={{headerShown: false}} />
        
      </Stack> */}
      <SignedIn>
        <Text>You are signed in</Text>
      </SignedIn>
      <SignedOut>
        <SignIn />
      </SignedOut>
      {/* // </UserLocationContext.Provider> */}
      </ClerkLoaded>
    </ClerkProvider>
   
  )
}

export default RootLayout