import { Text, View } from 'react-native'
import React from 'react'
import {Tabs, Redirect} from 'expo-router'

const TabsLayout = () => {
  return (
    <>
      <Tabs>
        <Tabs.Screen
          name="home"
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="maps"
          options={{
            title: 'Map',
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="charge"
          options={{
            title: 'Charge',
            headerShown: false,
          }}
        />

        <Tabs.Screen
          name="service"
          options={{
            title: 'Service',
            headerShown: false,
          }}
        />

<Tabs.Screen
          name="topup"
          options={{
            title: 'TopUp',
            headerShown: false,
          }}
        />

      </Tabs>
    </>
  )
}

export default TabsLayout

