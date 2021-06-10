import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import  UserSignInCard  from '../Components/UserSignInCard';
import  GuestSignInCard  from '../Components/GuestSignInCard';
import  ProfileBottomBar  from '../Components/ProfileBottomBar';

const LoginScreen = () => {

    return (
        <View style={styles.container}>
        <ProfileBottomBar/>
            <View style={{ flex: 1 }}>
                <UserSignInCard/>
                <GuestSignInCard/>
            </View>
        </View>
    )
    };

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          marginTop: 25,
          padding: 15
        }
    });

export default LoginScreen;