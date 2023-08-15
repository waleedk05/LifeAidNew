import {
  View,
  Text,
  SafeAreaView,
  Image,
  ImageBackground,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/themes";
import Button from "../components/Button";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";

const Signin = ({ navigation }) => {
  const handleButtonPress = () => {
    // When button is pressed
    navigation.navigate("Home");
  };

  return (
    <PageContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          barStyle={Platform.select({
            ios: "dark-content",
            android: "light-content",
          })}
          backgroundColor={Platform.select({
            ios: "black",
            android: "black",
          })}
        />

        <View style={styles.topContainer}>
          <Image source={images.topDesign} style={styles.top} />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 5,
          }}
        >
          <Image source={images.logo} style={{ marginHorizontal: 70 }}></Image>
        </View>
        <View style={{ marginLeft: 25, marginRight: 25 }}>
          <Text
            style={{
              ...FONTS.largerTitles,
              color: COLORS.primaryRed,
              marginTop: 10,
            }}
          >
            Sign In
          </Text>
          <Text style={{ ...FONTS.h2, color: COLORS.black, marginTop: 10 }}>
            {" "}
            Sign in using your credentials.
          </Text>

          <Input placeholder="Email" />
          <Input placeholder="Password" secureTextEntry />
        </View>
        <Button title="Sign In" onPress={handleButtonPress} />

        <View style={styles.forgotPassword}>
          <TouchableOpacity onPress={() => navigation.navigate("OtpCode")}>
            <Text
              style={{
                fontWeight: "bold",
                color: "#CF0A0A",
                fontSize: 13,
              }}
            >
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.signupContainer}>
          <Text style={{ color: "#000000", fontWeight: "400", fontSize: 15 }}>
            Don't have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.signupText}>Signup</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <Image source={images.bottomDesign} style={styles.bottom} />
        </View>
      </SafeAreaView>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: "7%",
    marginBottom: "-3%",
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  signupText: {
    marginLeft: 5,
    color: "#CF0A0A",
    fontWeight: "bold",
    fontSize: 17,
  },

  topContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bottomContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  top: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginLeft: -8,
  },
  bottom: {
    height: 150,
    width: 150,
    resizeMode: "contain",
    marginRight: -8,
    marginTop: 10,
  },
});
export default Signin;
