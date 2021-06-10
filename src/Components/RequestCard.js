import * as React from 'react';
import { Text, TextInput, StyleSheet} from 'react-native';
import { Button, Card , Paragraph} from 'react-native-paper';

const RequestCard = () => {

    return (
        <Card style={styles.card}>
        <Card.Title title="Titolo Richiesta" subtitle="di NomeUtente" />
        <Paragraph style={styles.paragraph}> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullamco laboriosam, nisi ut aliquid ex ea commodi consequatur. </Paragraph>
        </Card>
      );
    }

    const styles= StyleSheet.create({ 
        card: {
        margin:5,
      },

      buttonText: {
        fontWeight: "bold",
        color: "pink"
      },

      textInput:{
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
      },

      paragraph:{
        padding: 20,
      },
    });

export default RequestCard;