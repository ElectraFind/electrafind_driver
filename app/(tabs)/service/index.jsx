import {Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { useState } from 'react'
import { TouchableOpacity } from 'react-native'
import ServiceStation from '../../screens/service/ServiceStationsList'
import Mechanics from '../../screens/service/MechanicsList'
import ServiceStations from '../../screens/service/ServiceStationsList'
import { Ionicons } from '@expo/vector-icons';

export default function ServiceScreen() {

  const [activeButton, setActiveButton] = useState("Service Stations");

  return (

    <View>

      

        <View style={{flexDirection: "row", justifyContent: "center", marginTop: 50, marginHorizontal: 15, backgroundColor: "#E9E9E9", borderRadius: 20, borderWidth: 2,borderColor: "#000000",  }}>

            <TouchableOpacity style={{paddingVertical: 15, paddingHorizontal: 20, margin: 2, backgroundColor: activeButton === "Service Stations" ? "#000000" : "transparent", borderRadius: activeButton === "Service Stations" ? 15 : 0}}
              onPress={() => setActiveButton("Service Stations")} 
            >
              <Text style={{color: activeButton === "Service Stations" ? "#fff" : "#000",}} className={"font-psemibold"}>Service Stations</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{paddingVertical: 15, paddingHorizontal: 43, margin: 2, backgroundColor: activeButton === "Mechanics" ? "#000000" : "transparent", borderRadius: activeButton === "Mechanics" ? 15 : 0}}
              onPress={() => setActiveButton("Mechanics")} 
            >
              <Text style={{color: activeButton === "Mechanics" ? "#fff" : "#000",}} className={"font-psemibold"}>Mechanics</Text>
            </TouchableOpacity>

        </View>
          
          {
            activeButton === "Service Stations" && (
              <View style={{marginHorizontal: 16, marginVertical: 25}}>
                <ServiceStations/>
              </View>
            )
          }

          {
            activeButton === "Mechanics" && (
              <View style={{marginHorizontal: 16, marginVertical: 25}}>
                <Mechanics/>
              </View>
            )
          }

        

    </View>
  )
}


