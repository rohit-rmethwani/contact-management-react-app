import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ContactsScreen from './screens/ContactsScreen';


export default function App() {
  return (
    <View style={styles.container}> 
      <ContactsScreen></ContactsScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
