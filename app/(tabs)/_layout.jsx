import { Text, View, Image } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'
import { icons } from "../../constants";
import { StatusBar } from 'expo-status-bar'




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

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#22c55e",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 84,
          },
        }}
      >

        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
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

        <Tabs.Screen
          name="map"
          options={{
            title: "Map",
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

        <Tabs.Screen
           name="charge"
           options={{
             title: "Charge",
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

        <Tabs.Screen
          name="service"
          options={{
            title: "Service",
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

        <Tabs.Screen
          name="topup"
          options={{
            title: "Topup",
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

      </Tabs>

      <StatusBar backgroundColor="#161622" style="light" />
    </>
  )
}

export default TabsLayout

