//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDown from '../components/DropDown';
import Input from '../components/Input';


let bloodType = [{ id: 1, name: 'A+' }, { id: 2, name: 'A-' }, { id: 3, name: 'B+' }]

// create a component
const Home = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  const onSelect = (item) => {
    setSelectedItem(item)
  }

  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Input placeholder="Full Name" />
      <DropDown
        value={selectedItem}
        data={bloodType}
        onSelect={onSelect}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 40
  }
});

//make this component available to the app
export default Home;
