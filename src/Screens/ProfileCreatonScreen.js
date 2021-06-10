import * as React from 'react';
import { Text, StyleSheet} from 'react-native';
import { Button, Card } from 'react-native-paper';

const SignInCard = () => {

    return (
        <Card style={styles.card}>
            <Card.Title title="Ospite" subtitle="vuoi dare un occhiata prima di registrarti?" />
            <Card.Actions>
                <Button onPress={() => console.log('GuestLogin')}> <Text style={styles.buttonText} >Accedi come ospite</Text></Button>
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

    });

export default SignInCard;