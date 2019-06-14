
import React, { Component } from 'react';
import { TouchableOpacity, Alert, AsyncStorage, StyleSheet, TextInput, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';


import Navigation from './Navigation';

export default class More extends Component {
 
  // navigation() {
  //   Actions.navigation()
  // }
  // about() {
  //   Actions.about()
  // }
  // chat() {
  //   Actions.chat()
  // }
  // privacy() {
  //   Actions.privacy()
  // }
  // whyonlinelitigation() {
  //   Actions.whyonlinelitigation()
  // }

  // contact() {
  //   Actions.contact()
  // }
  // postacase() {
  //   Actions.postacase()
  // }
  // mycase() {
  //   Actions.mycase()
  // }

  render() {
    return (
      <Navigation/>
      // <View style={styles.container}>
        
      //   <TouchableOpacity onPress={this.navigation}><Text style={styles.Button}> About</Text></TouchableOpacity>

      //   <TouchableOpacity onPress={this.about}><Text style={styles.Button}> About</Text></TouchableOpacity>

      //   <View>
      //     <TouchableOpacity onPress={this.whyonlinelitigation}><Text style={styles.Button}> Why Online Litigation</Text></TouchableOpacity>
      //   </View>
      //   <View>
      //     <TouchableOpacity onPress={this.privacy} ><Text style={styles.Button}> Privacy Policy</Text></TouchableOpacity>
      //   </View>
      //   <View>
      //     <TouchableOpacity onPress={this.contact} ><Text style={styles.Button}>Contact Us</Text></TouchableOpacity>
      //   </View>
        /* <View>
          <TouchableOpacity onPress={this.chat} ><Text style={styles.Button}>Messages</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.postacase} ><Text style={styles.Button}>Post A Case</Text></TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={this.mycase} ><Text style={styles.Button}>My Case</Text></TouchableOpacity>
        </View> */
       
      /* </View> */
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

  Button: {
    color: '#94af76',
    fontSize: 16,
    fontWeight: '500'
  }
});




