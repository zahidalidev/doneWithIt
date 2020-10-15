// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Text, TextInput, View } from 'react-native';

import WelcomeScreen from "./app/screens/welcomeScreen"
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListiningDetailsScreen from './app/screens/ListiningDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/viewImageScreen';
import AccountScreen from './app/screens/AccountScreen';
import ListiningScreen from './app/screens/ListiningScreen';
import ListingEditScree from './app/screens/ListingEditScree';

import Card from "./app/components/Card";
import Screen from './app/components/Screen';
import Icon from "./app/components/Icon";
import ListItem from './app/components/lists/ListItem';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';

export default function App() {
  return (
    <ListingEditScree />
    // <Screen>
    // </Screen>
  );
}