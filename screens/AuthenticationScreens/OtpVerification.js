import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import PageContainer from "../../components/PageContainer";
import { StatusBar } from "react-native";
import { useState } from 'react';
import images from "../../constants/images";
import { COLORS, FONTS, SIZES } from "../../constants/themes";

function OtpVerification({ navigation }) {

  const [verificationCode, setVerificationCode] = useState("");
  const handleChangeVerificationCode = (text) => {
    // Limiting the verification code to 6 characters
    if (verificationCode.length <= 6) {
      setVerificationCode(text);
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
          <Image source={images.logo} style={{ marginTop: 0 }}></Image>
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
              marginTop: 50,
            }}
          >
            Reset Password
          </Text>

          <Text style={{ ...FONTS.h6, color: COLORS.black, marginTop: 10 }}>
            Please enter the 6-digit CODE sent to your phone number.
          </Text>

          <View style={styles.verificationCodeContainer}>
            <Text style={styles.inputLabel}>Enter the 6-digit code:</Text>
            <TextInput
              style={styles.verificationCodeInput}
              onChangeText={handleChangeVerificationCode}
              placeholder="Verification Code"
              keyboardType="numeric"
              maxLength={6}
              value={verificationCode}
            />
          </View>
        </View>

        <View>
          <TouchableOpacity
            style={[
              styles.button,
              { opacity: verificationCode.length < 6 ? 0.5 : 1 },
            ]}
            disabled={verificationCode.length < 6}
            onPress={() => {
              if (verificationCode.length < 6) return; // Disable the onPress functionality when the button is disabled
              navigation.navigate("ResetPassword");
            }}
          >
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomContainer}>
          <Image source={images.bottomDesign} style={styles.bottom} />
        </View>
      </SafeAreaView>
    </PageContainer>
  );
}

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

  verificationCodeContainer: {
    marginBottom: 5,
  },
  verificationCodeInput: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 2,
    marginBottom: 6,
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
    marginBottom: 150,
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

export default OtpVerification;
