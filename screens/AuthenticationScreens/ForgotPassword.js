import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import PageContainer from "../../components/PageContainer";
import { StatusBar } from "react-native";
import { useState } from 'react';
import images from "../../constants/images";
import { COLORS, FONTS, SIZES } from "../../constants/themes";


function ForgotPassword({ navigation }) {


  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+92'); //Country Code

  const handleChangeCountryCode = (text) => {
    setCountryCode(text);
  };

  const handleChangePhoneNumber = (text) => {
    // Limiting the phone number to 10 characters
    if (text.length <= 10) {
      setPhoneNumber(text);
    }
  }


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
            paddingTop: 0,
          }}
        >
          <Image source={images.logo} style={{ marginTop: 10 }}></Image>
        </View>

        <View
          style={{
            marginLeft: 25,
            marginRight: 25,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              ...FONTS.largerTitles,
              color: COLORS.primaryRed,
              marginTop: 40,
            }}
          >
            Reset Password
          </Text>

          <Text style={{ ...FONTS.h6, color: COLORS.black, marginTop: 10 }}>
            In order to reset your password, you need to enter your active phone
            number.
          </Text>

          <Text style={{ ...FONTS.h6, color: COLORS.black, marginTop: 10 }}>
            You will receive a 6-digit CODE on the phone number you entered.
          </Text>


          <View style={styles.phoneNumberContainer}>

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
          </View>
        </View>

        <TouchableOpacity
          style={[styles.button, { opacity: phoneNumber.length < 10 ? 0.5 : 1 }]}
          disabled={phoneNumber.length < 10}
          onPress={() => {
            if (phoneNumber.length < 10) return; // Disable the onPress functionality when the button is disabled
            navigation.navigate('OtpVerification');
          }}>

          <Text style={styles.buttonText}>Receive Code</Text>

        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Image source={images.bottomDesign} style={styles.bottom} />
        </View>
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
    marginTop: 30,
  },


  inputLabel: {
    color: '#CF0A0A',
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 15,
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
    paddingRight: 130,
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
    marginTop: 40,
    marginLeft: 100,
    marginRight: 100,
    marginBottom: 90,
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

export default ForgotPassword;
