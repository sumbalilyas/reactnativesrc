import React, { Component } from 'react';
import { TouchableOpacity, Alert, AsyncStorage, StyleSheet, TextInput, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Morepages extends Component {
 
    about() {
      Actions.about()
    }
    chat() {
      Actions.chat()
    }
    privacy() {
      Actions.privacy()
    }
    whyonlinelitigation() {
      Actions.whyonlinelitigation()
    }
  
    contact() {
      Actions.contact()
    }
    postacase() {
      Actions.postacase()
    }
    mycase() {
      Actions.mycase()
    }
  
    render() {
      return (
        <View style={styles.container}>
          
  
          <TouchableOpacity onPress={this.about}><Text style={styles.about}> About</Text></TouchableOpacity>
  
          <View>
            <TouchableOpacity onPress={this.whyonlinelitigation}><Text style={styles.heading}> Why Online Litigation</Text></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.privacy} ><Text style={styles.heading}> Privacy Policy</Text></TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={this.contact} ><Text style={styles.heading}>Contact Us</Text></TouchableOpacity>
          </View>
         </View> 
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 2,
     // justifyContent: '',
     // alignItems: 'center',
      backgroundColor: '#f5f5f5',
    },
    about: {
      color: '#94af76',
      
      marginTop:50,
      fontSize: 16,
      fontWeight: '500'
    },
    heading: {
      color: '#94af76',
      
      marginTop:20,
      fontSize: 16,
      fontWeight: '500'
    }
   
  });
  
  
  