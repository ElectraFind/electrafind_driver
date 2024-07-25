import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useAuth, useUser } from '@clerk/clerk-expo';
import { images } from '../../../constants';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function UserProfile() {
  const { isSignedIn } = useAuth();
  const { user } = useUser();
  const [profile, setProfile] = useState({ username: '', email: '', phone: '', address: '' });
  const navigation = useNavigation();

  useEffect(() => {
    if (isSignedIn && user && user.primaryEmailAddress) {
      const email = user.primaryEmailAddress.emailAddress || 'No email';
      const username = email.split('@')[0]; // Extract username from email
      const phone = user.phoneNumbers && user.phoneNumbers.length > 0 ? user.phoneNumbers[0].phoneNumber : 'No phone number';
      const address = user.publicMetadata?.address || 'No address';

      setProfile({ username, email, phone, address });
    }
  }, [isSignedIn, user]);

  if (!isSignedIn) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Please sign in to view your profile</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image 
              source={images.logoverticalshort}
              style={styles.imagelogo}
            /> 
          </View>
          <View style={styles.profileContainer}>
            <Text style={styles.title}>User Profile</Text>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Username:</Text>
              <Text style={styles.value}>{profile.username}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Email:</Text>
              <Text style={styles.value}>{profile.email}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Phone:</Text>
              <Text style={styles.value}>{profile.phone}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Address:</Text>
              <Text style={styles.value}>{profile.address}</Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.label}>Vehicle Number:</Text>
              <Text style={styles.value}>Not Available</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('editUserProfile')}>
              <Text style={styles.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  profileContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 50,
    margin: 20,
    width: '90%',
    maxWidth: 800,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  infoContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    fontWeight: 'bold',
    width: 100,
    color: '#333',
    fontSize: 20,
  },
  value: {
    flex: 1,
    color: '#666',
    fontSize: 20,
  },
  message: {
    fontSize: 18,
    color: '#666',
  },
  imagelogo: {
    width: 200,
    height: 70,
    objectFit: 'contain',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  
    marginBottom: 60,
    backgroundColor: '#000000',
    width: '120%',
    height: 80,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#000000',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 20,
  },
});
