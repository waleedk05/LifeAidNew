import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";

const Dots = ({ selected }) => {
  let backgroundColor;
  backgroundColor = selected ? "#ff2156" : "#808080";
  return (
    <View
      style={{
        height: 5,
        width: 5,
        marginHorizontal: 3,
        backgroundColor,
      }}
    />
  );
};
const Done = ({ ...props }) => (
  <TouchableOpacity
    style={{
      marginRight: 12,
    }}
    {...props}
  >
    <Text style={{ color: "#ff2156" }}>Done</Text>
  </TouchableOpacity>
);

const OnboardingStarter = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.navigate("GetStarted")}
      onDone={() => navigation.navigate("GetStarted")}
      DotComponent={Dots}
      bottomBarColor="#ffffff"
      DoneButtonComponent={Done}
      pages={[
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/hand.png")} />,
          title: "Donate Blood",
          subtitle: "You can donate blood to the Organization",
        },
        {
          backgroundColor: "#fff",
          image: <Image source={require("../../assets/hand.png")} />,
          title: "Request For Blood",
          subtitle: "You can make a blood donation request to the Organization",
        },
      ]}
    />
  );
};

export default OnboardingStarter;
