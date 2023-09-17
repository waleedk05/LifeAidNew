import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native'; // Import the necessary navigation hook
import Button from "../../components/Button";
import { icons } from '../../constants';
import images from "../../constants/images";

const Menu = (props) => {

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

            <View style={{ marginLeft: 40, marginRight: 40, marginBottom: 10, marginTop: 300 }}>
                <TouchableOpacity style={styles.blocks} onPress={() => props.navigation.navigate("Settings")}>
                    <Text style={{ fontSize: 20 }}>
                        Settings
                    </Text>
                    <Image source={icons.rightArrowBlack} style={styles.icon} />
                </TouchableOpacity>
            </View>
            <View style={{ marginLeft: 40, marginRight: 40, marginBottom: 30, marginTop: 10 }}>
                <TouchableOpacity style={styles.blocks} onPress={() => props.navigation.navigate("About")}>
                    <Text style={{ fontSize: 20 }}>
                        About
                    </Text>
                    <Image source={icons.rightArrowBlack} style={styles.icon} />
                </TouchableOpacity>
            </View>

            <Button title="Sign Out" onPress={handleSignOut} />
            <View style={styles.bottomContainer}>
                <Image source={images.bottomDesign} style={styles.bottom} />
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

        backgroundColor: 'white',

    },
    bottomContainer: {
        flex: 1,
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    bottom: {
        height: 150,
        width: 150,
        resizeMode: "contain",
        marginRight: -8,
    },
    blocks: {
        elevation: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.3,
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        marginTop: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'

    },
    icon: {
        justifyContent: 'flex-end',
        height: 16,
        width: 10
    }
});
export default Menu;