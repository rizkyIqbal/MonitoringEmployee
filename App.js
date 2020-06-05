import React, { Component } from 'react';
import { Login } from './src/pages/Login';
import HomeAdmin from './src/pages/admin/HomeAdmin';
// import HomeEmployee from './src/pages/employee/HomeEmployee';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 


const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  HomeAdmin: {screen: HomeAdmin},
  // HomeEmployee: {screen: HomeEmployee},
},{
    defaultNavigationOptions :{
        header:null,
    }


});

const App = createAppContainer(MainNavigator);

export default App;