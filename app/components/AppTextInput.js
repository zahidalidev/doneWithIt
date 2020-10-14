import React from "react";
import { Platform, StyleSheet, TextInput, View } from "react-native";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import defaultStyle from "../config/styles";

function AppTextInput({icon, style, ...otherProps}) {
    return(
        <View style={styles.container} >
            {icon && <MaterialCommunityIcons name={icon} size={20} color={defaultStyle.colors.medium} style={styles.icon} />}
            <TextInput 
                {...otherProps}
                style={[defaultStyle.text, style]}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    }
})

export default AppTextInput;
