import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ContactsScreen from './screens/ContactsScreen';
import AddContactScreen from './screens/AddContactScreen';
import ErrorBoundary from './components/ErrorBoundary';

const Stack = createStackNavigator();

export default function App() {
  return (
      <ErrorBoundary>
        <NavigationContainer style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="All Contacts" component={ContactsScreen} options={{headerShown: false}}/>
          <Stack.Screen name="Add Contact" component={AddContactScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      </ErrorBoundary>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});
