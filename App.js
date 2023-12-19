import React, {Component} from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import DrawerNavigator from './components/DrawerNavigator.js';

export default function App() {

  return(
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
  
}
