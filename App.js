import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator ,createAppContainer} from 'react-navigation'
import LoadingScreen from './screens/LoadingScreen'
import LoginScreen from './screens/LoginScreen'
import DashboardScreen from './screens/DashboardScreen'
import firebase from 'firebase'
import {firebaseConfig} from './config'
firebase.initializeApp(firebaseConfig)

const AppSwitchNavigator = createSwitchNavigator({
  LoadingScreen : LoadingScreen ,
  LoginScreen : LoginScreen ,
  DashboardScreen:DashboardScreen
})

const AppNavigator = createAppContainer(AppSwitchNavigator);
export default function App() {
  return (

        <AppNavigator/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
