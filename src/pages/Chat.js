
import React, {Component} from 'react';
import {StyleSheet,Text, Image,View} from 'react-native';

export default class Chat extends Component {
    render(){
        return(
            <View style={styles.container}>

<Image style={{ height: 100, width: 180}}
          source={require('../images/message.png')}/>
              <Text style={styles.paragraph} >
                  You  haven't got any messgaes yet-assign a case or get assigned to chat privately!
              </Text>
</View>
        )}}

        const styles = StyleSheet.create({
            container: {
              flex: 2,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
            },
            heading:{
                fontSize:26,
                fontWeight:'500',
                color:'#81c784',
                textAlign:'right',

            },
           paragraph:{
                fontSize:18,
                margin: 10, 
                fontStyle:'italic',
                color:'#1b1b1b',
            }
        });
        