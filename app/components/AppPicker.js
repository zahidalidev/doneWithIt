import React, { useState } from "react";
import { Button, FlatList, Modal, Platform, StyleSheet, TextInput, TouchableWithoutFeedback, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import defaultStyle from "../config/styles";
import AppText from "./AppText";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%"
}) {

    const [modalVisible, setModalVisible] = useState(false)
    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)} >
                <View style={[styles.container, width = { width }]} >
                    {icon && (
                        <MaterialCommunityIcons
                            name={icon}
                            size={20}
                            color={defaultStyle.colors.medium}
                            style={styles.icon}
                        />
                    )}
                    <AppText style={styles.text} >{selectedItem ? selectedItem.label : placeholder}</AppText>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={20}
                        color={defaultStyle.colors.medium}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal visible={modalVisible} animationType="slide" >
                <Screen>
                    <Button title="Close" onPress={() => setModalVisible(false)} />
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                label={item.label}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item)
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyle.colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
        marginVertical: 10,
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    },
})

export default AppPicker;
