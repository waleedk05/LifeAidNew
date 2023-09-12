import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth'; // Import the signOut function from Firebase auth
import { auth } from '../config';

const Home = ({ route, navigation }) => {
const { userData } = route.params;
console.log('userData:', userData);

const handleSignOut = () => {
signOut(auth)
.then(() => {
// Sign-out successful
console.log('User signed out');
navigation.navigate('Signin'); // Navigate to Signin screen after sign out
})
.catch((error) => {
console.error('Error signing out:', error);
});
};

return (
<View style={styles.container}>
<Text>Welcome, {userData.fullName}!</Text>
<TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
<Text>Sign Out</Text>
</TouchableOpacity>
</View>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
justifyContent: 'center',
alignItems: 'center',
backgroundColor: 'white',
},
signOutButton: {
marginTop: 20,
backgroundColor: '#FF6347',
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 10,
},
});

export default Home;
