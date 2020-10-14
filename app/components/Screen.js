import React from 'react';

import Constant from "expo-constants";
import { SafeAreaView, StyleSheet } from 'react-native';

function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]} >
            {children}
        </SafeAreaView>
    );
}

export default Screen;

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constant.statusBarHeight,
        flex: 1
    }
})