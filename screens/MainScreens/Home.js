import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config';
import PageContainer from '../../components/PageContainer';
import { CommonActions } from '@react-navigation/native'; // Import CommonActions
import { NavigationActions } from '@react-navigation/native';
import { icons } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../components/userContext';
const Home = () => {

  const { user } = useUser();


  return (
    <PageContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Text>Home Page</Text>
          <Text>Welcome, {user?.fullName}</Text>
        </View>
      </SafeAreaView>
    </PageContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  image: {
    width: 100, // Set the width and height as per your image
    height: 100,
  },
});

export default Home;
