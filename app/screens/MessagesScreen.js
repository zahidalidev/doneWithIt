import React, { useState } from 'react';
import { Alert, FlatList, StyleSheet, View } from 'react-native';

import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeperator from '../components/lists/ListItemSeperator';
import Screen from '../components/Screen';

const initialMessages = [
    {
        id: 1,
        title: 'T1',
        description: "D1",
        image: require("../assets/mosh.jpg")
    },
    {
        id: 2,
        title: 'T2',
        description: "D2",
        image: require("../assets/mosh.jpg")
    }
]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (id) => {
        setMessages(messages.filter((mess) => mess.id !== id))
    }

    return (
        <Screen>
            <FlatList
                data={messages} //providing data to flat list that will be array of objects and list will show all of them
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    //custom list rendering in flatList
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        showChevrons
                        onPress={() => console.log("message selected ", item)}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
                        )}
                    />
                }
                ItemSeparatorComponent={ListItemSeperator}
                //to referesh list first set the value of refereshing to false using variable
                refreshing={refreshing}
                onRefresh={() => {
                    //sow this messages after refreshing
                    setMessages(
                        [
                            {
                                id: 2,
                                title: 'T2',
                                description: "D2",
                                image: require("../assets/mosh.jpg")
                            }
                        ]
                    )
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({

})

export default MessagesScreen;