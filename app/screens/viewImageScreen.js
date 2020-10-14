// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, StatusBar, Image } from 'react-native';

import colors from "../config/colors"
import {MaterialCommunityIcons} from "@expo/vector-icons"; 

export default function ViewImageScreen(props) {
  return (
    <View style={styles.container} >
      <View style={styles.closeIcon} >
        <MaterialCommunityIcons name="close" color="white" size={35} />
      </View>
      <View style={styles.deleteIcon} >
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35} />
      </View>
      <Image resizeMode="contain" style={styles.image} source={require("../assets/chair.jpg")} ></Image>
    </View>    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    flex: 1
  },

  image: {
    height: "100%",
    width: "100%"
  },

  closeIcon: {
    position: "absolute",
    left: 30, marginTop: StatusBar.currentHeight + 5
  },
  
  deleteIcon: {
    position: "absolute",
    right: 30, marginTop: StatusBar.currentHeight + 5
  },

})