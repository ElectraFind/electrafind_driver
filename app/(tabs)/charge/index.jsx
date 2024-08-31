import { SafeAreaView, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { StyleSheet } from 'react-native';
import React, { useState } from 'react';
import * as Haptics from 'expo-haptics';
import Header from '../../screens/charge/Header';
import Recent from '../../screens/charge/Recent';
import History from '../../screens/charge/History';

export default function ChargeScreen() {
  const [activeButton, setActiveButton] = useState("Recent");

  const handleButtonPress = (buttonName) => {
    setActiveButton(buttonName);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const renderContent = () => {
    if (activeButton === "Recent") {
      return <Recent />;
    } else if (activeButton === "History") {
      return <History />;
    }
    return null;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === "Recent" && styles.activeButton,
            ]}
            onPress={() => handleButtonPress("Recent")}
          >
            <Text
              style={[
                styles.buttonText,
                activeButton === "Recent" && styles.activeButtonText,
              ]}
            >
              Recent
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.button,
              activeButton === "History" && styles.activeButton,
            ]}
            onPress={() => handleButtonPress("History")}
          >
            <Text
              style={[
                styles.buttonText,
                activeButton === "History" && styles.activeButtonText,
              ]}
            >
              History
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <FlatList
        data={[{ key: activeButton }]} // Dummy data to trigger rendering
        renderItem={() => (
          <View style={styles.contentContainer}>
            {renderContent()}
          </View>
        )}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    zIndex: 10,
    paddingVertical: 40,
    paddingBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
    marginHorizontal: 20,
    backgroundColor: "#E9E9E9",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#000000",
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 14,
    paddingHorizontal: 55,
    margin: 2,
    borderRadius: 0,
  },
  activeButton: {
    backgroundColor: "#000000",
    borderRadius: 15,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
  },
  activeButtonText: {
    color: "#fff",
  },
  flatListContent: {
    flexGrow: 1,
  },
  contentContainer: {
    marginHorizontal: 16,
    marginVertical: 25,
  },
});
