import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import ChargeScreen from './index'
import Options from './options'
import TimerScreen from './timer'
import SummaryScreen from './summary'

const Stack = createStackNavigator();

export default function ChargeLayout() {
  return (
    <>
      <Stack.Navigator initialRouteName='index' options={{headerShown:false}}>
        <Stack.Screen name='index' component={ChargeScreen} options={{headerShown:false}}/>
        <Stack.Screen name='options' component={Options} options={{headerShown:false}}/>
        <Stack.Screen name='timer' component={TimerScreen} options={{headerShown:false}}/>
        <Stack.Screen name='summary' component={SummaryScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </>
  )
}