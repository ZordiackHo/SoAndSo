import * as React from 'react';
import { Text, TextInput, StyleSheet} from 'react-native';
import {  Card , Paragraph, Avatar, IconButton, Caption } from 'react-native-paper';

const MessageCard = () => {

    return (
        <Card style={styles.card}>

        <Card.Content>
        <Paragraph style={styles.paragraph}> Ciao, sono il primo messaggio di questa chat </Paragraph>
        <Paragraph style={styles.paragraph}>  19:30 15/10/1993 </Paragraph>
        </Card.Content>
        </Card>
      );
    }

    const styles= StyleSheet.create({ 
        card: {
        marginRight:'25%',
        paddingLeft:5,
        backgroundColor:'antiquewhite'
      },

      buttonText: {
        fontWeight: "bold",
        color: "pink"
      },

      title:{
      },

      paragraph:{
        padding: 1,
      },

      avatar:{
        margin:5
      },
    });

export default MessageCard;