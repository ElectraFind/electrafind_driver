import { SafeAreaView, Text, View, Image, ScrollView, Button, TouchableOpacity } from 'react-native'
import { StyleSheet } from 'react-native'
import React, {useEffect, useState} from 'react'
import * as Haptics from 'expo-haptics'
import Header from '../../screens/charge/Header'
import Recent from '../../screens/charge/Recent'
import History from '../../screens/charge/History'
import { images } from '../../../constants'
import CustomButton from '../../../components/CustomButton'
import { BarCodeScanner } from 'expo-barcode-scanner'

export default function ChargeScreen(){

  const [activeButton, setActiveButton] = useState("Recent");

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [text, setText] = useState('Not yet scanned')

  const askForCameraPermission = () => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }

  //Request permission to use the camera
  useEffect(() => {
    askForCameraPermission();
  }, []);

  //What happens when we scan the barcode
  const handleBarcodeScanned = ({ type, data }) => {
    setScanned(true);
    setText(data);
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  //check if we have permission to use the camera
  if (hasPermission === null) {
    return (
      <View>
        <Text>Requesting for camera permission</Text>
      </View>
    )
  }

  if (hasPermission === false) {
    return (
      <View>
        <Text>No access to camera</Text>
        <Button title={'Allow Camera'} onPress={askForCameraPermission} />
      </View>
  )}

  return (

    <SafeAreaView>
      <ScrollView>
      <View>
        <View style={styles.headerContainer}>
            <Header/>
        </View>

        <View style={{flexDirection: "row", justifyContent: "center", marginTop: 120, marginHorizontal: 20, backgroundColor: "#E9E9E9", borderRadius: 20, borderWidth: 2,borderColor: "#000000",  }}>

          <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center',paddingVertical: 14, paddingHorizontal: 55, margin: 2, backgroundColor: activeButton === "Recent" ? "#000000" : "transparent", borderRadius: activeButton === "Recent" ? 15 : 0}}
            onPress={() => handleButtonPress("Recent")} 
          >
            <Text style={{color: activeButton === "Recent" ? "#fff" : "#000",}} className={"font-psemibold"}>Recent</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{flex: 1,alignItems: 'center',justifyContent: 'center',paddingVertical: 14, paddingHorizontal: 55, margin: 2, backgroundColor: activeButton === "History" ? "#000000" : "transparent", borderRadius: activeButton === "History" ? 15 : 0}}
            onPress={() => handleButtonPress("History")} 
          >
            <Text style={{color: activeButton === "History" ? "#fff" : "#000",}} className={"font-psemibold"}>History</Text>
          </TouchableOpacity>

        </View>
        
        {
          activeButton === "Recent" && (
            <View style={{marginHorizontal: 16, marginVertical: 25}}>
              <Recent/>
            </View>
          )
        }

        {
          activeButton === "History" && (
            <View style={{marginHorizontal: 16, marginVertical: 25}}>
              <History/>
            </View>
          )
        }

      </View>
      </ScrollView>
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  headerContainer:{
    position: 'absolute',
    zIndex: 10,
    padding: 60,
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,

  },
  maintext: {
    fontSize: 16,
    margin: 20,
  },
})

