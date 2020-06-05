import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Badge,
  Card,
  CardItem,
  Body,
  Row,
  Col,
  View,
  ListItem,
  Left,
  Right,
  Radio,
  Fab,
  List,
  Thumbnail,
  Tabs,
  Tab,
} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import Iqbal from 'react-native-vector-icons/Feather';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import LinearGradient from 'react-native-linear-gradient';
import {BottomNavigation, Text, Title} from 'react-native-paper';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
} from 'react-native';

export default class EmployeeAdmin extends React.Component {
  render() {
    return (
      <>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 15,
  },

  cardd: {
    height: 150,
  },

  bgg: {
    backgroundColor: '#000',
  },

  employe: {
    backgroundColor: '#235BB2',
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 80,
  },

  textEmployee: {
    color: '#FFF',
    fontSize: 15,
  },

  addButton: {
    width: 50,
    height: 50,
    borderRadius: 30,
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#3080E8',
  },

  list: {},

  indx: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },

  home: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    height: 260,
    backgroundColor: '#1663C7',
  },
});
