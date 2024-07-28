import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useNavigation } from 'expo-router';
import React from 'react';
import { router } from "expo-router";

const Home = () => {
  

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="w-full justify-center items-center min-h-[85vh] px-4">
          <Image
            source={images.logo}
            className="max-w-[480px] w-full h-[400px]"
            resizeMode="contain"
          />
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Power up anywhere with
            </Text>
            <Image
              source={images.logoname2}
              resizeMode="contain"
              className=" w-[350px] h-[60px] items-center"
            />
          </View>
          <CustomButton
            title="Get started"
            onPress={() => router.push("sign-in")}
            containerStyles="w-full mt-20"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
};

export default Home;
