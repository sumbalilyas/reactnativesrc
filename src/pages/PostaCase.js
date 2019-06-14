import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Alert,TouchableOpacity,TextInput, YellowBox} from "react-native";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class PostaCase extends Component {

  constructor(props) {
     super(props);
     YellowBox.ignoreWarnings([
      'Warning: isMounted(...) is deprecated', 'Module RCTImageLoader'
    ]);
   }

  render() {
    return (
      
       
            
      <MenuProvider style={{ flexDirection: "column", padding: 30 }}>
        <Menu onSelect={value => alert(`You Clicked : ${value}`)}>
        <Text style={styles.heading}>Post Your Case Here</Text>
          <MenuTrigger  >
          <Text style={styles.headerText}>Select Your Case Type </Text>
          </MenuTrigger  >
          <Text style={styles.subheading}>Description</Text>
<TextInput style={styles.description}
 underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder="Describe your case in more details "
              placeholderTextColor = "#bdbdbd"
              autoCapitalize="none"
             underlineColorAndroid='transparent'
           ></TextInput>

<Text style={styles.subheading}>What's your Budget?</Text>
<TextInput style={styles.description}
 underlineColorAndroid='rgba(0,0,0,0)' 
             placeholder="Enter budget "
              placeholderTextColor = "#bdbdbd"
              autoCapitalize="none"
             underlineColorAndroid='transparent'
           ></TextInput>
<TouchableOpacity style={styles.button} 
               > 
               <Text style={styles.buttonText}>Add Case</Text>
           </TouchableOpacity> 

          <MenuOptions style={styles.Content}>
            <MenuOption value={"Domestic Relation"} >
              <Text style={styles.menuContent}>Domestic Relation</Text>
            </MenuOption>
            <MenuOption value={"Adoption"}>
              <Text style={styles.menuContent}>Adoption</Text>
            </MenuOption>
            <MenuOption value={"Juvenile"}>
              <Text style={styles.menuContent}>Juvenile</Text>
            </MenuOption>
            <MenuOption value={"Protection Orders"}>
              <Text style={styles.menuContent}>Protection Orders</Text>
            </MenuOption>
            <MenuOption value={"Contract"}>
              <Text style={styles.menuContent}>Contract</Text>
            </MenuOption>
            <MenuOption value={"Administrative Review"}>
              <Text style={styles.menuContent}>Administrative Review</Text>
            </MenuOption>
            <MenuOption value={"Torts"}>
              <Text style={styles.menuContent}>Torts</Text>
            </MenuOption>
            
            
            <MenuOption value={"Extraordinary Remedy"}>
              <Text style={styles.menuContent}>Extraordinary Remedy</Text>
            </MenuOption>
            
            
          </MenuOptions>
           </Menu>
            </MenuProvider>
     
         
    );
  }
}

const styles = StyleSheet.create({
    headerText: {
    fontSize: 15,
    margin: 10,
    borderRadius:6,
    marginTop:30,
   fontWeight: "bold"
  },
  subheading:{
    fontSize: 15,
    margin: 10,
    marginTop:40,
   fontWeight: "bold"
 
  },
  heading:{
    fontSize: 16,
    fontWeight: '500',
    color: '#81c784',
    textAlign: 'left',


  },
  button: {
    width:350,
    height:40,
    backgroundColor:'#7cb342',
     borderRadius: 3,
    marginVertical: 70,
    
     
     
     
  },
  buttonText: {
    fontSize:16,
    fontWeight:'400',
    color:'#ffffff',
    textAlign:'center'
  },
  menuContent: {
    color: "#373737",
    
    backgroundColor:'#c5e1a5',
    fontWeight: "bold",
    padding: 2,
    fontSize: 15
  },
  Content: {
   
    
    backgroundColor:'#c5e1a5'
   },
   description:{
    width:350,
  backgroundColor:'#f5f5f5',

  paddingHorizontal:6,
  fontSize:14,
  color:'#484848',
  marginVertical: 5,
  
   }
});