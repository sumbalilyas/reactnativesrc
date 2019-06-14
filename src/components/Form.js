import React, {Component} from 'react';
import {TextInput , TouchableOpacity,StyleSheet,Keyboard, Text, View} from 'react-native';


export default class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      confirmpass:'',
      nickname:'',
      phoneno:'',
      cnic:'',
    }}
    myFun=() =>{
      const {email,password,confirmpass,nickname,phoneno,cnic} = this.state;
      
      if(email==""&&confirmpass==""&& nickname==""&& phoneno==""&& cnic=="" && password==""){
        this.setState({Error: 'please fill the Form'});
      }
      else if(email==""){
        //alert('please fill the first name');
        this.setState({Error: 'please fill the email'});
      }
      
      else if(password==""){
        this.setState({Error: 'please fill the password'});
      }
      else if(confirmpass==""){
        this.setState({Error: 'please confirm the password'});
      }
      else if(confirmpass!="password"){
        this.setState({Error: 'password did not match'});
      }
      else if(password.length <5){
        this.setState({Error: 'password  must be more than 5'});
      }
      else if(nickname==""){
        //alert('please fill the first name');
        this.setState({Error: 'please fill the nickname'});
      }
      else if(phoneno==""){
        //alert('please fill the first name');
        this.setState({Error: 'please fill the phoneno'});
      }
      else if(phoneno.length< 11){
        //alert('please fill the first name');
        this.setState({Error: 'please fill the phoneno'});
      }
      else if(cnic==""){
        //alert('please fill the first name');
        this.setState({Error: 'please fill the cnic'});
      }
    
      else if(cnic.length< 13){
        //alert('please fill the first name');
        this.setState({Error: 'please enter the Valid CNIC'});
      }
     
      else{
        //alert('thank you, your form is submitted successfully');
    
        this.setState({Error: 'thank you, your form is submitted successfully'});
      }
    
      Keyboard.dismiss();
    }
     
  render() {
      return (
         <View >
         <Text style={{color:'red', textAlign:'center'}}>
      {this.state.Error}
      </Text>
         <TextInput style={styles.inputBox}
      underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              onChangeText={
                email => this.setState({  email})
              }
              placeholderTextColor = "#bdbdbd"
            //   selectionColor="#fff"
            //   keyboardType="email-address"
            //   onSubmitEditing={()=> this.password.focus()} 
           />
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={
                password => this.setState({ password})
              }
              placeholderTextColor = "#bdbdbd"
              />
              
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Confirm Password"  
              placeholderTextColor = "#bdbdbd"
              onChangeText={
                confirmpass => this.setState({  confirmpass})
              }
              />
              
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Nickname"  
              placeholderTextColor = "#bdbdbd"
              onChangeText={
                nickname => this.setState({  nickname})
              }
              />
              
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Phone Number"  
              placeholderTextColor = "#bdbdbd"
              onChangeText={
                phoneno => this.setState({phoneno})
              }
              />
              
            <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder=" CNIC"  
              placeholderTextColor = "#bdbdbd"
              onChangeText={
                cnic => this.setState({cnic})
              }
              />
              {/* <TouchableOpacity  onPress={this.myFun}
               > 
               <Text style={styles.buttonText}>Sign Up</Text>
           </TouchableOpacity>      */}
           <TouchableOpacity
      onPress={this.myFun}
      style={styles.button}
      >
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

  		

        </View>
          )
    }
}

const styles = StyleSheet.create({
container:{
    flex:1,
    marginVertical: 20,
    justifyContent:'center',
    height: 100,
    alignItems: 'center'
},
inputBox: {
    width:300,
    backgroundColor:'#eceff1',
    borderRadius: 15,
    paddingHorizontal:16,
    fontSize:13,
    color:'#484848',
    marginVertical: 5
  },
  button: {
    width:200,
    backgroundColor:'#7cb342',
     borderRadius: 15,
      marginVertical: 10,
      paddingVertical: 10
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  }
});