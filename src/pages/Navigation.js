import React from 'react';
import { Button, Text, View, TouchableOpacity, StyleSheet } from 'react-native';

//import all the basic component we have used

import  Ionicons from 'react-native-vector-icons/Ionicons';
//import Ionicons to show the icon for bottom options
//For React Navigation 2.+ import following
//import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
//For React Navigation 3.+ import following
import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer,
} from 'react-navigation';
//import createStackNavigator, createBottomTabNavigator, createAppContainer in our project
import PostaCase from './PostaCase';
import Morepages from './Morepages';
import Chat from './Chat';
import Mycase from './Mycase';

const MycaseStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Mycase: { screen:  Mycase },
   
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'My Case',
      //Header title
    },
  }
);



const PostaCaseStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    PostaCase: { screen: PostaCase },
   
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Post a Case',
      //Header title
    },
  }
);

const ChatStack = createStackNavigator(
  {
    //Defination of Navigaton from home screen
    Chat: { screen: Chat },
   
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'Chat',
      //Header title
    },
  }
);
const MorepagesStack = createStackNavigator(
  {
    //Defination of Navigaton from setting screen
    Morepages: { screen: Morepages },
    // Contact: { screen:Contact },
    // Mycase: { screen: Mycase },
  
  },
  {
    //For React Navigation 2.+ change defaultNavigationOptions->navigationOptions
    defaultNavigationOptions: {
      //Header customization of the perticular Screen
      headerStyle: {
        backgroundColor: '#42f44b',
      },
      headerTintColor: '#FFFFFF',
      title: 'More Pages',
      //Header title
    },
  }
);

const Navigation = createBottomTabNavigator(

  {
  
    Mycase : { screen:MycaseStack },
    PostaCase: { screen:PostaCaseStack },
    
    Chat: { screen:ChatStack },
 Morepages: { screen: MorepagesStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
      
         if (routeName === 'Mycase') {
          iconName =ios="ios-paper" ,md="md-paper";
          ` iconName${focused ? '' : '-outline'}`;
        }
       
        else if (routeName === 'PostaCase') {
          
         iconName = ios="ios-create", md="md-create";
           `iconName ${focused ? '' : '-outline'}`;
        }
       else if (routeName === 'Chat') {

        iconName= ios="ios-chatbubbles" ,md="md-chatbubbles";
          `iconName${focused ? '' : '-outline'}`;
        }
       else if (routeName === 'Morepages') 
         {   
        iconName = "ios-more" ,md="md-more";
        `iconName${focused ? '' : '-outline'}`;
        
          }
         return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#42f44b',
      inactiveTintColor: 'gray',
    },
  }
);
//For React Navigation 2.+ need to export App only
//export default App;
//For React Navigation 3.+
export default createAppContainer(Navigation);
//export default Navigation;



