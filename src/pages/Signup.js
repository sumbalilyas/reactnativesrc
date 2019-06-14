
import React, {Component} from 'react';
import {StatusBar, TouchableOpacity,StyleSheet, Text, View} from 'react-native';
 import Logo from '../components/Logo';
 import Form from '../components/Form';

 import {Actions} from 'react-native-router-flux';

export default class Signup extends Component {
  
    goBack() {
        Actions.pop();
    }
  
  
    render() {
    return (
      <View style={styles.container}>
        <Logo/>
        <Form/>
        <View style={styles.signupTextCont}>
            <Text style={styles.signupText}> Already have an account  </Text>
        	<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
				
        </View>
       </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    signupTextCont : {
        flexGrow: 1,
      alignItems:'flex-end',
      justifyContent :'center',
      paddingVertical:16,
      flexDirection:'row'
    },
  signupText: {
    color:'#212121',
    fontSize:16
},
signupButton:{
    color:'#7cb342',
  	fontSize:16,
  	fontWeight:'500'
}
  });
  