//React-Native imports
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

import { View, SafeAreaView, StyleSheet, Text , TextInput, ColorPropType, TextInputComponent } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph, ViewStyle, Appbar, Drawer} from 'react-native-paper';


//---------------------------------------------------------------------------------------------------------------------------
//src imports

//Screens
import LoginScreen from './src/Screens/LoginScreen';
import ChatScreen from './src/Screens/ChatScreen';
import RequestScreen from './src/Screens/RequestScreen';
//---------------------------------------------------------------------------------------------------------------------------

//Firebase imports
import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyB9-GOYlWMMyd47ix96EhCdhlIyxRkl47E",
  authDomain: "soandso-bd8c1.firebaseapp.com",
  projectId: "soandso-bd8c1",
  storageBucket: "soandso-bd8c1.appspot.com",
  messagingSenderId: "758688569889",
  appId: "1:758688569889:web:760133148523813495e160",
  measurementId: "G-EDQ16DPJPX"
}

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}
//---------------------------------------------------------------------------------------------------------------------------

//App: main function

export default function App() {
  
  const [active, setActive] = React.useState('');
  
  return (
  <SafeAreaView style={styles.container}>

      <ChatScreen/> 

  </SafeAreaView>
  );

}

/*styles: CSS like structure for styling. Individual components styles their own objecs right now.
!!Need to build a global StyleSheet!!*/

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 25,
  },

  paragraph:{
      fontWeight: "bold",
      fontSize: 30,
  }
});
