
import * as React from 'react';
import { Text, TextInput, StyleSheet} from 'react-native';
import { Button, Card , Paragraph} from 'react-native-paper';

const typeCard = () => {

    return (
        <Card style={styles.card}>
            <Card.Actions>
            <TextInput style={styles.textInput} placeholder="Scrivi qui"/>
            </Card.Actions>
            <Card.Actions>
            <Button onPress={() => console.log('SendMessageRequest')}style={styles.button}>  <Text style={styles.buttonText} > Invia </Text></Button>
            </Card.Actions>
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
        height: 'auto',
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

export default typeCard;