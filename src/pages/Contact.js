
import React, {Component} from 'react';
import {StyleSheet,TouchableOpacity,TextInput,Text, View} from 'react-native';

export default class Contact extends Component {
    render(){
        return(
            <View style={styles.container}>

<Text style={styles.heading}>Contact Us</Text>
<Text style={styles.paragraph} >The Online Litigation team is always</Text>
<Text style={styles.paragraph} >avaiable to answer any and all of your </Text>
<Text style={styles.paragraph} >questions.The more detail you provide,</Text>
<Text style={styles.paragraph} >the beetter we'll be able to respond.</Text>
<Text style={styles.paragraph} >Thanks!</Text>
<TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Name"  
              placeholderTextColor = "#bdbdbd"
            
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email*"  
              placeholderTextColor = "#bdbdbd"
            
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Subject*"  
              placeholderTextColor = "#bdbdbd"
            
              />
              <TextInput style={styles.inputBox} 
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Message*"  
              placeholderTextColor = "#bdbdbd"
            
              />
             <TouchableOpacity
      style={styles.button}
      >
      <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>


{/* <Text style={styles.paragraph} >Address: Hafiz Hayat Campus, University of Gujrat</Text>
             
              <Text style={styles.paragraph} >     Email: 15081598-142@uog.edu.pk</Text>
              <Text style={styles.paragraph} >  15081598-065@uog.edu.pk</Text>
              <Text style={styles.paragraph} >  15081598-119@uog.edu.pk</Text> */}
               



</View>
        )}}

        const styles = StyleSheet.create({
            container: {
              flex: 2,
              marginTop:30,
              backgroundColor: '#f5f5f5',
             
            },
            heading:{
                fontSize:26,
                fontWeight:"bold",
                color:'#81c784',
                marginBottom:30,
                marginLeft:15,
            },
           paragraph:{
                fontSize:18,
                color:'#424242',
                fontWeight:"bold",
               marginLeft:15,
               
            },
            button: {
                width:350,
                backgroundColor:'#7cb342',
                 borderRadius: 5,
                 marginLeft:15,
                  paddingVertical: 10
              },
              buttonText: {
                fontSize:16,
                fontWeight:'500',
                color:'#ffffff',
                textAlign:'center'
              },
            inputBox: {
                width:350,
                backgroundColor:'#eceff1',
                borderRadius: 5,
                fontSize:13,
                color:'#484848',
                marginLeft:15,
                marginTop: 10,
              }
        });
        