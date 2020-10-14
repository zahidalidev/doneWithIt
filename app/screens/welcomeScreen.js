import React from "react";
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';

import AppButton from "../components/AppButton";

export default function WelcomeScreen(props){
    return(
      <ImageBackground blurRadius = {5} style={styles.backgroundImage} source={require("../assets/background.jpg")} >
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine} >Sell What You Don't need</Text>
        
        <View style={styles.buttonContainer}>
          <AppButton title="Login" />
          <AppButton title="Register" color = "secondary" />
        </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1, 
      justifyContent: "flex-end",
      alignItems: "center"
    },
    
    buttonContainer: {
      width: "100%",
      padding: 20
    },

    logo: {
      width: 100, 
      height: 100, 
      position: "absolute",
      top: 70
    },
    
    tagLine: {
      position: "absolute",
      top: 180,
      fontSize: 25,
      fontWeight: "bold",
      textTransform: "capitalize"
    },

  })