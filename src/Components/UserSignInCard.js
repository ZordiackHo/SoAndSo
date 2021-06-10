import * as React from 'react';
import { Text, TextInput, StyleSheet} from 'react-native';
import { Button, Card } from 'react-native-paper';

const SignInCard = () => {

    return (
        <Card style={styles.card}>
        <Card.Title title="Utente Registrato" subtitle="accedi al tuo profilo b o creane uno" />
          <Card.Actions>
            <TextInput style={styles.textInput} placeholder="Nome Utente"/>
          </Card.Actions>
          <Card.Actions>
          <Button onPress={() => console.log('LogInRequest')}style={styles.button}>  <Text style={styles.buttonText} >Accedi </Text></Button>
          <Button onPress={() => console.log('RegistrationRequest')}style={styles.button}>  <Text style={styles.buttonText} >Registrati</Text></Button>
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
        height: 50,
        width: '100%',
        borderWidth: 1,
        padding: 15,
        marginBottom: 20,
        borderColor: 'gray',
      }
    });

export default SignInCard;