import React from 'react';
import {StyleSheet} from 'react-native';
import { navigatorRef } from './App/navigation/rootNavigation'
import navigationTheme from './App/navigation/navigationTheme'
import { NavigationContainer } from "@react-navigation/native"
import AppNavigator from './App/navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer ref={navigatorRef} theme={navigationTheme}>
    <AppNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
});
