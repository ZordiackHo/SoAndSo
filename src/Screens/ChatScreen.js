import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {  Card , Paragraph, Avatar, IconButton } from 'react-native-paper';

import MessageCard from '../Components/MessageCard';
import  ChatBottomBar  from '../Components/ChatBottomBar';
import TypeCard from '../Components/TypeCard';

const ChatScreen = () => {

    return (
        <View style={styles.container}>
        <Avatar.Icon size={24} icon="account" style={styles.avatar} />
        <Text style={styles.paragraph}>UtenteContattato</Text>

        <IconButton icon="keyboard-backspace" onPress={() => {}} />

        <ChatBottomBar/>
                <MessageCard/>
            <TypeCard></TypeCard>
        </View>
    )
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: 25,
          padding: 15
        },

        paragraph:{
            fontWeight: "bold",
            fontSize: 30,
        }
    });

export default ChatScreen;