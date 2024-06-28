import { useState } from "react";
import { Link, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView, Dimensions, Alert, Image } from "react-native";

import { images } from "../../constants";
import CustomButton from "../../components/CustomButton";
import FormField from "../../components/FormField";

const SignUp = () => {
  const [form, setForm] = useState({
    username:"",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const submit = () => {
    
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View
          className="w-full flex justify-center h-full px-4 my-6 mt-0">

          <View className="flex flex-row items-center pt-5 gap-1">
            <Image
              source={images.logo}
              resizeMode="contain"
              className="w-[104px] h-[84px] items-center"
            />

            <Text className="text-4xl font-semibold text-green-500 font-pbold">ElectraFind</Text>

          </View>  
          

          <Text className="text-2xl font-semibold text-white mt-10 font-psemibold">
            Sign Up
          </Text>

          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles="mt-10"
      
          />

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="flex justify-center pt-5 flex-row gap-2">
            <Text className="text-lg text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/home"
              className="text-lg font-psemibold text-green-500"
            >
              Sign in
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;