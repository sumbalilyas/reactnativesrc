import React, {Component} from 'react';
import {StatusBar,Image, StyleSheet, Text, View} from 'react-native';


export default class Login extends Component {
    render() {
      return (
          <View style={style.container}>
          <Image style={{width:150,height:100}}
          source={require('../images/1.png')}/>
      <Text style={StyleSheet.logoText}>Welcome To Online Litigation System App</Text>
      </View>
          )
    }
}

const style = StyleSheet.create({
container:{
    flexGrow:1,
    
  	marginVertical: 35,
    justifyContent:'flex-end',
    alignItems: 'center'
},
  logoText : {
  	marginVertical: 25,
  	fontSize:28,
  	color:'rgba(255, 255, 255, 0.7)'
  }
});