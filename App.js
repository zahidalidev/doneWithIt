// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';

import Card from "./app/components/Card";
import Screen from './app/components/Screen';
import ListiningDetailsScreen from './app/screens/ListiningDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/viewImageScreen';
import WelcomeScreen from "./app/screens/welcomeScreen"
import Icon from "./app/components/Icon";
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListiningScreen from './app/screens/ListiningScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';

export default function App() {
  return (
    <LoginScreen />
    // <Screen>
    // </Screen>
  );
}