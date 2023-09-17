import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';


const AdminDashboard = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.title}>Admin Dashboard</Text>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('MassRequest')}>
        <Text>Mass Request</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('ManageRequest')}>
        <Text>Manage Requests</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Registration')}>
        <Text>Registration</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('ManageEvents')}>
        <Text>Manage Events</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('PatientInfo')}>
        <Text>Patients Record/Reports</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('PatientInfo')}>
        <Text>User Information</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Inventory')}>
        <Text>Blood Inventory</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton} onPress={() => navigation.navigate('Inventory')}>
        <Text>Feedback</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  signOutButton: {
    marginTop: 20,
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
});

export default AdminDashboard;
