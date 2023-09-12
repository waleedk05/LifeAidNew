import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import Bottomtab from "./components/tabnavigate";
import { UserProvider } from "./components/userContext";


import {
  OnboardingStarter,
  GetStarted,
  Signin,
  Signup,
  ForgotPassword,
  OtpVerification,
  ResetPassword,
} from "./screens/AuthenticationScreens";

import { Home, RequestPage, Profile } from "./screens/MainScreens";
import { AdminSignIn } from "./screens/AdminScreens";



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
    <UserProvider>
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
            name="ForgotPassword"
            component={ForgotPassword}
            options={{ headerShown: false }} />
          <Stack.Screen
            name="OtpVerification"
            component={OtpVerification}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="ResetPassword"
            component={ResetPassword}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="tabnavigate" component={Bottomtab} options={{ headerShown: false }} />

        </Stack.Navigator>


      </NavigationContainer>
    </UserProvider>

  );
}
