import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import UnitAdmin from '../UnitAdmin';
import UnitList from '../UnitList';
import AddUnit from '../AddUnit';
import AddUnitEmployee from '../AddUnitEmployee';

const AppNavigator = createStackNavigator({
  UnitList: {
    screen: UnitList,
  },
  AddUnitEmployee:{
    screen: AddUnitEmployee,
  },
  UnitAdmin: {
    screen: UnitAdmin,
  },
  AddUnit: {
    screen: AddUnit,
  },
},
  {
    initialRouteName: 'UnitAdmin',
    header: null,
    headerMode: 'none'
    }
);

export default createAppContainer(AppNavigator);