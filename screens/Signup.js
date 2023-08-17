import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/themes";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { useState } from 'react';

function Signup({ navigation }) {

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true); // Add email validation state
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+92'); //Country Code
  const [password, setPassword] = useState("");

  const handleEmailChange = (text) => {
    setEmail(text);
    setIsEmailValid(isValidEmail(text)); // Update email validation
  };

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const handleChangePhoneNumber = (text) => {
    // Limiting the phone number to 10 characters
    if (text.length <= 10) {
      setPhoneNumber(text);
    }
  };

  const handleChangeCountryCode = (text) => {
    setCountryCode(text);
  };

  const handlePassword = (text) => {
    // Limiting the password to 8 characters
    if (password.length <= 8) {
      setPassword(text);
    }
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
        <ScrollView>

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
            <Image source={images.logo} style={{ marginTop: -90 }}></Image>
          </View>
          <View style={{ marginLeft: 25, marginRight: 25 }}>
            <Text
              style={{
                ...FONTS.largerTitles,
                color: COLORS.primaryRed,
                marginTop: 10,
              }}
            >
              Sign Up
            </Text>

            <Text style={styles.inputLabel}>Name</Text>

            <Input placeholder={"Full Name"} />

            <Text style={styles.inputLabel}>Email:</Text>

            <Input placeholder="name@example.com"
              keyboardType="email-address"
              inputMode="email"
              value={email}
              onChangeText={handleEmailChange}
              Email // Add the Email prop to indicate it's an email input 
            />
            {!isEmailValid && (
              <Text style={{ color: "red", marginLeft: 0 }}>
                Enter a valid email address
              </Text>
            )}
            <Text style={styles.inputLabel}>Enter your phone number:</Text>

            <View style={styles.phoneInputContainer}>
              <TextInput
                style={styles.countryCodeInput}
                onChangeText={handleChangeCountryCode}
                placeholder="Country Code"
                keyboardType="phone-pad"
                maxLength={3}
                value={countryCode}
              />
              <TextInput
                style={styles.phoneNumberInput}
                onChangeText={handleChangePhoneNumber}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                maxLength={10}
                value={phoneNumber}
              />
            </View>

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
                navigation.navigate("SignupComplete");
              }}
            >
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>





          <View style={styles.bottomContainer}>
            <Image source={images.bottomDesign} style={styles.bottom} />
          </View>

        </ScrollView>
      </SafeAreaView>
    </PageContainer>
  );
};

const styles = StyleSheet.create({
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
    marginBottom: 50
  },
  signupText: {
    marginLeft: 5,
    color: "#CF0A0A",
    fontWeight: "bold",
    fontSize: 17,
  },
  phoneNumberContainer: {
    marginBottom: 10,
  },
  phoneInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  countryCodeInput: {
    borderWidth: 1.5,
    paddingHorizontal: 19,
    paddingVertical: 14,
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: "#f5f5f5",
    width: 75,
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 80,

  },
  phoneNumberInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 6,
    marginLeft: 10,
    borderWidth: 1.5,
    paddingLeft: 25,
    paddingRight: 140,
    paddingVertical: 14,
    borderRadius: 12,
    fontSize: 16,
    fontStyle: "normal",
    elevation: 8,
    shadowColor: "black",
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    shadowOpacity: 10,
    backgroundColor: "#f5f5f5",
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
export default Signup;
