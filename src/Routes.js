import React, { Component } from 'react'
import { Router, Stack, Scene } from 'react-native-router-flux'
import { View, Text } from 'react-native'
import Login from './pages/Login';
import Signup from './pages/Signup';
import More from './pages/More'
import About from './pages/About';
import Whyonlinelitigation from './pages/Whyonlinelitigation';
import Welcome from './pages/Welcome';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Chat from './pages/Chat';
import PostaCase from './pages/PostaCase';
import Mycase from './pages/Mycase';
import Navigation from './pages/Navigation';

import Morepages from './pages/Morepages';
const Routes = () => {
     return (
          <Router>
               <Scene key="root">
                    <Scene
                         key="welcome"
                         component={Welcome}
                         title=""
                    />
                    <Scene
                         key="login"
                         component={Login}
                         title="Login"
                    />
                    <Scene
                         key="signup"
                         component={Signup}
                         title="Sign up"
                    />

                    <Scene
                         key="navigation"
                         component={Navigation}
                         title="Navigation"
                    />

                    <Scene
                         key="more"
                         component={More}
                    //title="More Pages " 

                    />
                    <Scene
                         key="morepages"
                         component={Morepages}
                         title="pages"

                    />
                    <Scene
                         key="about"
                         component={About}


                    />

                    <Scene
                         key="privacy"
                         component={Privacy}
                    // title="Privacy " 

                    />
                    <Scene
                         key="whyonlinelitigation"
                         component={Whyonlinelitigation}
                    // title="Why Online Litigation " 

                    />

                    <Scene
                         key="contact"
                         component={Contact}
                         title="contact "
                    />
                    <Scene
                         key="chat"
                         component={Chat}
                         title="Messages "
                    />
                    <Scene
                         key="postacase"
                         component={PostaCase}
                         title="postacase "
                    />
                    <Scene
                         key="mycase"
                         component={Mycase}
                         title="mycase "
                    />
               </Scene>
          </Router>

     )
}
export default Routes;