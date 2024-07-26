import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { mechanics } from '../../screens/service/MechanicsList';
import { serviceStations } from '../../screens/service/ServiceStationsList';

const Profile = () => {
  const route = useRoute();
  const { id, type } = route.params;
  const [comment, setComment] = useState('');

  // Function to get profile data from the corresponding list
  const getProfileData = () => {
    if (type === 'mechanic') {
      return mechanics.find(mechanic => mechanic.id === id);
    } else if (type === 'serviceStation') {
      return serviceStations.find(station => station.id === id);
    }
    return null;
  };

  const profileData = getProfileData();

  if (!profileData) {
    return (
      <View style={styles.container}>
        <Text>Profile not found</Text>
      </View>
    );
  }

  const handleSubmit = () => {
    // Handle the submit action, e.g., send the comment to a server or add it to a list
    console.log('Comment submitted:', comment);
    setComment(''); // Clear the comment input after submission
  };

  return (
    <View style={styles.container}>
      <Image source={profileData.image} style={styles.profileImage} />
      <Text style={styles.name}>{profileData.name}</Text>
      <Text style={styles.address}>{profileData.address}</Text>

      <View style={styles.iconRow}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="call" size={24} color="green" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="location" size={24} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="share" size={24} color="gold" />
        </TouchableOpacity>
      </View>

      <View style={styles.aboutContainer}>
        <Text style={styles.aboutTitle}>About</Text>
        <Text style={styles.aboutText}>{profileData.about}</Text>
      </View>

      <View style={styles.reviewContainer}>
        <Text style={styles.reviewTitle}>Reviews</Text>
        <View style={styles.stars}>
          {[...Array(5)].map((_, index) => (
            <Ionicons key={index} name="star" size={24} color="gold" />
          ))}
        </View>
        <TextInput
          style={styles.commentInput}
          placeholder="Add a Comment"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },
  profileImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  address: {
    fontSize: 16,
    color: '#666',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
  },
  iconButton: {
    alignItems: 'center',
  },
  aboutContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
  },
  aboutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  aboutText: {
    fontSize: 16,
    color: '#666',
  },
  reviewContainer: {
    backgroundColor: '#f9f9f9',
    padding: 16,
    borderRadius: 10,
  },
  reviewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  commentInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
  submitButton: {
    backgroundColor: '#15803d',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Profile;




// import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import React from 'react';
// import { useRoute } from '@react-navigation/native';
// import { Ionicons } from '@expo/vector-icons';
// import images from '../../../constants/images'; 
// import ServiceStationsList from '../../screens/service/ServiceStationsList';
// import MechanicsList from '../../screens/service/MechanicsList';



// const Profile = () => {
//   const route = useRoute();
//   const { id,type } = route.params;
//   console.log('station:')

//   const getProfileData = () => {
//     if (type === 'mechanic') {
//       return MechanicsList.find(mechanic => mechanic.id === id);
//     } else if (type === 'serviceStation') {
//       return ServiceStationsList.find(station => station.id === id);
//     }
//     return null;
//   };

//   const profileData = getProfileData();

//   if (!profileData) {
//     return (
//       <View style={styles.container}>
//         <Text>Profile not found</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       <Image source={profileData.image} style={styles.profileImage} />
//       <Text style={styles.name}>{profileData.name}</Text>
//       <Text style={styles.address}>{profileData.address}</Text>

//       <View style={styles.iconRow}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name="call" size={24} color="green" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name="location" size={24} color="blue" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconButton}>
//           <Ionicons name="share" size={24} color="gold" />
//         </TouchableOpacity>
//       </View>

//       <View style={styles.aboutContainer}>
//         <Text style={styles.aboutTitle}>About</Text>
//         <Text style={styles.aboutText}>{profileData.about}</Text>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ffffff',
//     padding: 16,
//   },
//   profileImage: {
//     width: '100%',
//     height: 200,
//     borderRadius: 10,
//   },
//   name: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginVertical: 8,
//   },
//   address: {
//     fontSize: 16,
//     color: '#666',
//   },
//   iconRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     marginVertical: 16,
//   },
//   iconButton: {
//     alignItems: 'center',
//   },
//   aboutContainer: {
//     backgroundColor: '#f9f9f9',
//     padding: 16,
//     borderRadius: 10,
//   },
//   aboutTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 8,
//   },
//   aboutText: {
//     fontSize: 16,
//     color: '#666',
//   },
// });

// export default Profile;

