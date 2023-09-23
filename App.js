import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import Bottomtab from "./components/tabnavigate";



import {
  GetStarted,
  Signin,
  Signup,
  ResetPassword,

} from "./screens/AuthenticationScreens";


import AdminDashboard from "./screens/BackendScreens/AdminDashboard";
import { About, Invite, Menu, Settings } from "./screens/MainScreens";



SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();




export default function App() {




  const [fontLoaded] = useFonts({
    HeeboRegular: require("./assets/fonts/Heebo-Regular.ttf"),
    PoppinBold: require("./assets/fonts/Poppins-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);
  if (!fontLoaded) {
    return null;
  }


  return (

    <NavigationContainer onReady={onLayoutRootView} initialRouteName="GetStarted">
      <Stack.Navigator>

        <Stack.Screen
          name="GetStarted"
          component={GetStarted}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{ headerShown: false }} />



        <Stack.Screen name="tabnavigate" component={Bottomtab} options={{ headerShown: false }} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard} options={{ headerShown: false }} />

        <Stack.Screen name='Menu' component={Menu} options={{
          title: 'Menu', headerStyle: { backgroundColor: '#CF0A0A' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white'
        }} />
        <Stack.Screen name='Invite' component={Invite} options={{
          title: 'Invite', headerStyle: { backgroundColor: '#CF0A0A' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white'
        }} />
        <Stack.Screen name='About' component={About} options={{
          title: 'About', headerStyle: { backgroundColor: '#CF0A0A' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white'
        }} />
        <Stack.Screen name='Settings' component={Settings} options={{
          title: 'Settings', headerStyle: { backgroundColor: '#CF0A0A' }, headerTitleStyle: { color: 'white' }, headerTintColor: 'white'
        }} />

      </Stack.Navigator>


    </NavigationContainer>


  );
}
