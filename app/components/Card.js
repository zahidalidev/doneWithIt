// @flow
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from "../config/colors";
import AppText from "../components/AppText"

export default function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card} >
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                <AppText style={styles.subTitle} numberOfLines={2} >{subTitle}</AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden"
    },

    image: {
        width: "100%",
        height: 200
    },

    detailsContainer: {
        padding: 20
    },

    title: {
        marginBottom: 7
    },

    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    }
})