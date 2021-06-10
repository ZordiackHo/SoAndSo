import * as React from 'react';
import {Text, StyleSheet} from 'react-native';
import { Button, Card } from 'react-native-paper';

const PostCard = () => {

    return (
        <Card style={styles.card}>
        <Text>Hello, I am your card!</Text>
        </Card>
      );
    }

    const styles= StyleSheet.create({ 
        card: {
        margin:5,
      },
    });

export default PostCard;