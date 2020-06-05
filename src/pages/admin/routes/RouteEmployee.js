import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import EmployeeAdmin from '../EmployeeAdmin';
import AddEmployee from '../AddEmployee';
import AddAdmin from '../AddAdmin';

const AppNavigator = createStackNavigator({
  Employee: {
    screen: EmployeeAdmin,
  },
  AddEmployee: {
    screen: AddEmployee
  },
  AddAdmin: {
    screen: AddAdmin
  }
},
  {
    initialRouteName: 'Employee',
    header: null,
    headerMode: 'none'
    }
);

export default createAppContainer(AppNavigator);