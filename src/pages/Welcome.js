
import React, {Component} from 'react';
import {
  Text,
    ScrollView,
    View,StyleSheet,
    Image,TouchableOpacity,TouchableHighlight,
    Dimensions} from 'react-native';

    import {Actions} from 'react-native-router-flux';
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;

    export default class Welcome  extends Component{
        login() {
            Actions.login()
      }
     render(){
         return(
             <ScrollView
             horizontal ={true}
             >
            <View style={styles.container}>
            <Text style={styles.heading}> 
             Welcome to Online Litigation System
            </Text> 
            <Image style={{width:300,height:250,marginTop:100}}
          source={require('../images/Post.png')}/>
        <Text style={styles.subheading}> 
           Post your Case
            </Text> 
            <Text style={styles.textstyle}> 
           Tell us what you need.It's FREE to post
            </Text> 
          
         
            <TouchableOpacity style={styles.button} onPress={this.login}
             > 
             <Text  style={styles.buttonText}>Get Started</Text>
         </TouchableOpacity>     
                             </View>

        {/* 2nd Screen  */}

        <View style={styles.container}>

<Text style={styles.heading}> 
 Welcome to Online Litigation System
</Text> 
<Image style={{width:300,height:250,marginTop:100}}
source={require('../images/Review.png')}/>
<Text style={styles.subheading}> 
Review Offers
</Text> 
<Text style={styles.textstyle}> 
Receive Offers from trusted Lawyers
</Text> 

<TouchableOpacity style={styles.button} onPress={this.login}
             > 
             <Text  style={styles.buttonText}>Get Started</Text>
         </TouchableOpacity>     
         
</View>
<View style={styles.container}>

<Text style={styles.heading}> 
 Welcome to Online Litigation System
</Text> 
<Image style={{width:300,height:250,marginTop:100}}
source={require('../images/Hire.png')}/>
<Text style={styles.subheading}> 
Hire the right Lawyer
</Text> 
<Text style={styles.textstyle}> 
Choose the right lawyer for your case
</Text>
<Text style={styles.text}>>>></Text>
 <TouchableOpacity style={styles.button} onPress={this.login}
             > 
             <Text  style={styles.buttonText}>Get Started</Text>
         </TouchableOpacity>      
         
</View>


             </ScrollView>
       
         );
       
        }

    }
            const styles = StyleSheet.create({
            container:
            {
                backgroundColor:'#fafafa',
              //  flex:1,
              //  marginTop:10,
                width:screenWidth,
                justifyContent:'center',
               alignItems:'center'
            },
            textstyle:{
                fontSize:15,
                fontFamily: 'Cochin',
                padding:15,
                color:'#484848',
                textAlign:'center'
            },
            
            heading:{
                fontSize:20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
               padding:15,
               marginTop:50,
                color:'#7cb342',
               // textAlign:'center'
            },
            subheading:{
                fontSize:20,
                fontFamily: 'Cochin',
                fontWeight: 'bold',
                padding:15,
                color:'#7cb342',
                textAlign:'center'
            },
            button: {
                width:410,
                backgroundColor:'#7cb342',
                justifyContent:'center',
                alignItems:'center',
               height:50,
                // borderRadius: 25,
                  marginTop: 90,
                  padding: 0
              },
              buttonText: {
                fontSize:16,
                fontWeight:'500',
                color:'#ffffff',
                textAlign:'center'
              },
              text:
              {
                fontSize:7,
                textAlign:'right'
              }
        });
    