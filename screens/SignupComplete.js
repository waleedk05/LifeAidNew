import {
  View,
  Text,
  SafeAreaView,
  Image,
  StyleSheet,
  Platform,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { StatusBar } from "react-native";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/themes";
import PageContainer from "../components/PageContainer";
import Input from "../components/Input";
import { useState } from 'react';
import DropDown from '../components/DropDown';



let bloodType = [
  { id: 1, name: 'A+' },
  { id: 2, name: 'A-' },
  { id: 3, name: 'B+' },
  { id: 4, name: 'B-' },
  { id: 5, name: 'AB+' },
  { id: 6, name: 'AB-' },
  { id: 7, name: 'O+' },
  { id: 8, name: 'O-' }
]

function SignupComplete() {

  const [selectedItem, setSelectedItem] = useState(null)

  const onSelect = (item) => {
    setSelectedItem(item)
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
            <Text style={styles.inputLabel}>Address</Text>

            <Input placeholder={"Enter your full address"} />

            <View>
              <DropDown
                value={selectedItem}
                data={bloodType}
                onSelect={onSelect}
              />
            </View>
            <Input placeholder={"Enter your full address"} />
            <Input placeholder={"Enter your full address"} />
            <Input placeholder={"Enter your full address"} />

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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  topContainer: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  bottomContainer: {


    position: 'absolute',
    bottom: -50,
    right: 10
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
    marginLeft: 20,

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

export default SignupComplete;