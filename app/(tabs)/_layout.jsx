import { Text, View, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { icons } from "../../constants";
import { StatusBar } from 'expo-status-bar'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './home/index'
import MapScreen from './map/index'
import ChargeScreen from './charge/index'
import ServiceScreen from './service/index'
import TopupScreen from './topup/index'
import chargingStationProfile from './map/chargingStationProfile';
import App from './map/_layout'





const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

export default function TabsLayout() {
  return (
    
    <Tab.Navigator
      
        screenOptions={{
          
          tabBarActiveTintColor: "#22c55e",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 64,
          },
        }}
      >

        <Tab.Screen
          name="home"
          component={HomeScreen}
          
          options={{
            title: "HomeScreen",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                name="Home"
                focused={focused}
              />
            ),
          }}
        />

        <Tab.Screen
          name="map"
          component={MapScreen}
          options={{
            title: "MapScreen",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.map}
                color={color}
                name="Map"
                focused={focused}
              />
            ),
          }}
        />

        <Tab.Screen
            name="charge"
            component={ChargeScreen}
           
           options={{
             title: "ChargeScreen",
             headerShown: false,
             tabBarIcon: ({ color, focused }) => (
               <TabIcon
                 icon={icons.charge}
                 color={color}
                 name="Charge"
                 focused={focused}
               />
             ),
           }}
        />

        <Tab.Screen
          name="service"
          component={ServiceScreen}
          
          options={{
            title: "ServiceScreen",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.service}
                color={color}
                name="Service"
                focused={focused}
              />
            ),
          }}
        />

        <Tab.Screen
          name="topup"
          component={TopupScreen}
          
          options={{
            title: "TopupScreen",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.topup}
                color={color}
                name="Topup"
                focused={focused}
              />
            ),
          }}
        />

      
    </Tab.Navigator>
      // <StatusBar backgroundColor="#161622" style="light" />
    
  )
}

