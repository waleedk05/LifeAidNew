import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/themes";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { useState } from 'react';

const Signin = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true); // Add email validation state

  const [password, setPassword] = useState("");
  const handlePassword = (text) => {
    // Limiting the password to 8 characters
    if (password.length <= 8) {
      setPassword(text);
    }
  };

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsEmailValid(isValidEmail(text)); // Update email validation
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
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
          <Image source={images.logo} style={{ marginTop: -40 }}></Image>
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
          <Text style={{ ...FONTS.h6, color: COLORS.black, marginTop: 10 }}>
            Sign in using your credentials.
          </Text>

          <Text style={styles.inputLabel}>Email:</Text>
          <Input placeholder="name@example.com"
            keyboardType="email-address"
            inputMode="email"
            value={email}
            onChangeText={handleEmailChange}
            Email // Add the Email prop to indicate it's an email input 
          />
          {!isEmailValid && (
            <Text style={{ color: "red", marginLeft: 25 }}>
              Enter a valid email address
            </Text>
          )}

          <Text style={styles.inputLabel}>Password:</Text>
          <Input placeholder="min. 8 characters" secureTextEntry maxLength={8} value={password} onChangeText={handlePassword} />

        </View>

        <View>
          <TouchableOpacity
            style={[
              styles.button,
              { opacity: password.length < 8 ? 0.5 : 1 },
            ]}
            disabled={password.length < 8}
            onPress={() => {
              if (password.length < 8) return; // Disable the onPress functionality when the button is disabled
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.buttonText}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.forgotPassword}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ForgotPassword")}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: "#CF0A0A",
                fontSize: 15,
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
  inputLabel: {
    color: '#CF0A0A',
    fontWeight: 'bold',
    marginTop: 4,
    marginBottom: 1,
  },

  forgotPassword: {
    justifyContent: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 0,
  },
  signupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 70
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
    marginTop: 20,
    marginBottom: 0,
    marginLeft: 20
  },

  button: {
    backgroundColor: COLORS.primaryRed,
    borderRadius: 13,
    paddingHorizontal: 5,
    paddingVertical: 15,
    marginTop: 30,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 0.8,
    elevation: 8,
  },
  buttonText: {
    fontSize: 17,
    alignSelf: "center",
    color: COLORS.secondaryWhite,
    fontWeight: "bold",
    fontFamily: "HeeboRegular",
  },

});
export default Signin;
