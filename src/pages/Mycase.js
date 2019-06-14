
import React, { Component } from 'react';
import { StyleSheet, Text, Button, Image, View } from 'react-native';

export default class Mycase extends Component {
    render() {
        return (
            <View style={styles.container}>

                <Image style={{ height: 100, width: 180 }}
                    source={require('../images/Post.png')} />
                <Text style={styles.paragraph} >
                    You currently have no Case,
              </Text>
                <Text style={styles.paragraph}>
                    Post your very first case
                 </Text>
                <Button
                title="Post a Case"
                color="#7cb342"
  //accessibilityLabel="Learn more about this purple button"
/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    heading: {
        fontSize: 26,
        fontWeight: '500',
        color: '#81c784',
        textAlign: 'right',

    },
    paragraph: {
        fontSize: 18,
        margin: 10,
        fontStyle: 'italic',
        color: '#1b1b1b',
    }
    
});

