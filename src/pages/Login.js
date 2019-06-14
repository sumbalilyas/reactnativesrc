
import React, { Component } from 'react';
import { TouchableOpacity, Keyboard, StyleSheet, TextInput, Text, View } from 'react-native';
import Logo from '../components/Logo';
import { Actions } from 'react-native-router-flux';


export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      ErrorStatus: true,
      password: ''

    }
  }
  onEnterText = (TextInputValue) => {
    if (TextInputValue.trim() != 0) {
      this.setState({ TextInputValue: TextInputValue, ErrorStatus: true });
    } else {
      this.setState({ TextInputValue: TextInputValue, ErrorStatus: false });
    }
  }


  signup() {
    Actions.signup()
  }

  more() {
    Actions.more()
  }
 

  render() {
    return (

      <View style={styles.container}>
        <Logo />

        <TextInput style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Username"
          placeholderTextColor="#bdbdbd"
          autoCapitalize="none"
          onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
          underlineColorAndroid='transparent'
        />
        {this.state.ErrorStatus == false ? (
          <Text style={styles.errorMessage}>
            * Please enter the text to proceed.
             </Text>
        ) : null}
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid='rgba(0,0,0,0)'
          placeholder="Password"
          onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
          secureTextEntry={true}
          placeholderTextColor="#bdbdbd"
        />
        {this.state.ErrorStatus == false ? (
          <Text style={styles.errorMessage}>
            * Please enter the text to proceed.
             </Text>
        ) : null}
        <TouchableOpacity style={styles.button} onPress={this.more}
        >
        <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.signupTextCont}>
        <Text style={styles.signupText}> Don't have an account yet? </Text>
        <TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 10,
    flexDirection: 'row'
  },
  signupText: {
    color: '#212121',
    fontSize: 16
  },
  signupButton: {
    color: '#7cb342',
    fontSize: 16,
    fontWeight: '500'
  },

  button: {
    width: 300,
    backgroundColor: '#7cb342',
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 13
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center'
  },
  inputBox: {
    width: 300,
    backgroundColor: '#eceff1',
    borderRadius: 10,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#484848',
    marginVertical: 15,
  },

  errorMessage: {
    fontSize: 15,
    color: "red",
    marginLeft: -80,
  }
});
