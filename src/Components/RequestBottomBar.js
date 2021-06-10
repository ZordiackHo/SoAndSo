import * as React from 'react';
import { Text, StyleSheet} from 'react-native';
import { Appbar } from 'react-native-paper';

const RequestBottomBar = () => {

    return (
        <Appbar style={styles.bottom}>
        <Appbar.Action icon="message" onPress={() => console.log('Pressed Profile')} />
        <Text style={styles.logoText} > Request </Text>
        </Appbar>
      );
    }

    const styles= StyleSheet.create({ 
        bottom: {
        
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'pink',
          },
        
          logoText: {
            fontSize: 20,
            fontWeight: "bold"
          },

    });

export default RequestBottomBar;