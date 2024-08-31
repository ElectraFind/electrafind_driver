import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';

export default function TimerScreen({ route }) {

  const { time } = route.params;  // Receive the designated time in minutes from the previous screen
  const [seconds, setSeconds] = useState(0);
  const ratePerMinute = 5; // 5 rupees per minute
  const navigation = useNavigation();

  useEffect(() => {
    const countUp = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds + 1 >= time * 60) {
          clearInterval(countUp);
          navigation.navigate('summary', { totalTime: (time).toFixed(2), totalCost: (time * ratePerMinute).toFixed(2) });
          return prevSeconds + 1;
        }
        return prevSeconds + 1;
      });
    }, 1000);

    return () => clearInterval(countUp);
  }, [time, navigation]);

  const formatTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const remainingSeconds = secs % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const totalCost = (seconds / 60) * ratePerMinute;

  const handleStop = () => {
    Alert.alert(
      'Stop Charging',
      'Are you sure you want to stop charging?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Stop', onPress: () => navigation.navigate('summary', { totalTime: (seconds / 60).toFixed(2), totalCost }) },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Charge Your Vehicle</Text>
      <Text style={styles.subtitle}>Your vehicle is charging for {time} minutes</Text>
      <View>
        <Video
          source={require('../../../assets/Green ring Charging.mp4')}
          rate={1.0}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={styles.video}
        />
      </View>

      <Text style={styles.timer}>Time {formatTime(seconds)}</Text>
      <Text style={styles.cost}>Total Cost: Rs{totalCost.toFixed(2)}</Text>

      <TouchableOpacity style={styles.stopButton} onPress={handleStop}>
        <Text style={styles.stopButtonText}>Stop</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 70,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#000000',
    marginTop: 20,
  },
  video: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  cost: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000000',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 40,
    
  },
  stopButton: {
    backgroundColor: '#000000',
    paddingVertical: 20,
    paddingHorizontal: 150,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  stopButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
