import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; // Import the necessary navigation hook

const Profile = (props) => {


    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(() => {
                console.log('User signed out');
                props.navigation.navigate("Signin"); // Navigate to the Sign In screen after sign out
                console.log('Navigation complete.');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    return (
        <View style={styles.container}>
            <Text>Profile</Text>
            <TouchableOpacity onPress={handleSignOut} style={styles.signOutButton}>
                <Text>Sign Out</Text>
            </TouchableOpacity>
        </View>
    );
}

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
export default Profile;
