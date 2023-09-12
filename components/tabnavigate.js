import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, RequestPage, Profile } from "../screens/MainScreens";
import { TouchableOpacity, Text, Image } from "react-native";
import { icons } from '../constants';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Bottomtab() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
        >
            <Tab.Screen name="Home" component={props => <Home {...props} />} options={{
                title: 'home',
                headerStyle: {
                    backgroundColor: 'red', // Custom header color
                },
                headerTitle: 'Welcome, ${user?.fullName}',

                headerLeft: () => ( // Custom header with image

                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <Image
                            source={icons.profilePicWhite} // Replace with actual image path
                            style={{ width: 30, height: 30, marginRight: 10 }}
                        />
                    </TouchableOpacity>
                ),
            }} />

            <Tab.Screen name="RequestPage" component={RequestPage} options={{
                title: 'Request Page', headerStyle: { backgroundColor: 'red' }
            }} />
            <Tab.Screen name="Profile" component={Profile} options={{
                title: 'Donors Page', headerStyle: { backgroundColor: 'red' }
            }} />
        </Tab.Navigator>
    )
}

export default Bottomtab;