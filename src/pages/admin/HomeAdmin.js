import React, {Component} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  FlatList,
  View,
} from 'react-native';

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Card,
  CardItem,
} from 'native-base';

import Span from '../../components/Span';
import RouterEmployee from './routes/RouteEmployee';

import {BottomNavigation, Text} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

var colors = ['#1e7a8c', '#473fb5', '#15708c', '#326ddb'];

class HomeAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ['#1e7a8c', '#473fb5', '#15708c', '#326ddb'],
      selectedColor1: '',
      selectedColor2: '',
      selectedColor3: '',
    };
  }
  componentDidMount() {
    this._getRandomColor(), this._getRandomColor2(), this._getRandomColor3();
  }

  _getRandomColor() {
    var item = this.state.bgColor[
      Math.floor(Math.random() * this.state.bgColor.length)
    ];
    this.setState({
      selectedColor1: item,
    });
  }

  _getRandomColor2() {
    var item = this.state.bgColor[
      Math.floor(Math.random() * this.state.bgColor.length)
    ];
    this.setState({
      selectedColor2: item,
    });
  }

  _getRandomColor3() {
    var item = this.state.bgColor[
      Math.floor(Math.random() * this.state.bgColor.length)
    ];
    this.setState({
      selectedColor3: item,
    });
  }
  render() {
    return (
      <>
        <View>
          <List style={{backgroundColor: '#fff', height: 125}}>
            <ListItem
              avatar
              itemDivider={false}
              style={{backgroundColor: '#fff', height: 125}}>
              <Body style={{borderBottomWidth: 0}}>
                <Text style={{fontSize: 25, fontWeight: 'bold'}}>
                  Welcome Back
                </Text>
                <Text note style={{fontSize: 20, color: '#555'}}>
                  Chiko Jeriko
                </Text>
              </Body>
              <Right style={{borderBottomWidth: 0}}>
                <Thumbnail
                  large
                  source={require('../../images/fotoprofil.jpg')}
                />
              </Right>
            </ListItem>
          </List>
        </View>
        {/* pembatas */}
        <Span />
        {/* pembatas */}
        <View style={{backgroundColor: '#fff', paddingVertical: 20}}>
          <View style={{paddingHorizontal: 35, paddingBottom: 5}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Dashboard</Text>
          </View>
          <View style={{paddingLeft: 60}}>
            <ScrollView horizontal={true}>
              <FlatList
                horizontal
                data={[{employee: '07'}]}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('UnitAdmin')
                      }>
                      <Card style={{borderRadius: 10}}>
                        <CardItem
                          style={{
                            height: 100,
                            width: 175,
                            borderRadius: 10,
                            backgroundColor: this.state.selectedColor1,
                          }}>
                          <Body>
                            <Text style={styles.dasborkonten}>
                              Total Employee
                            </Text>
                            <Text style={styles.dasborkonten}>
                              {item.employee}
                            </Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <FlatList
                horizontal
                data={[{report: '09'}]}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('UnitAdmin')
                      }>
                      <Card style={{borderRadius: 10}}>
                        <CardItem
                          style={{
                            height: 100,
                            width: 175,
                            borderRadius: 10,
                            backgroundColor: this.state.selectedColor2,
                          }}>
                          <Body>
                            <Text style={styles.dasborkonten}>
                              Total Report
                            </Text>
                            <Text style={styles.dasborkonten}>
                              {item.report}
                            </Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <FlatList
                horizontal
                data={[{project: '06'}]}
                renderItem={({item, index}) => (
                  <View>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate('UnitAdmin')
                      }>
                      <Card style={{borderRadius: 10}}>
                        <CardItem
                          style={{
                            height: 100,
                            width: 175,
                            borderRadius: 10,
                            backgroundColor: this.state.selectedColor3,
                          }}>
                          <Body>
                            <Text style={styles.dasborkonten}>
                              Total Project
                            </Text>
                            <Text style={styles.dasborkonten}>
                              {item.project}
                            </Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </TouchableOpacity>
                  </View>
                )}
              />
            </ScrollView>
          </View>
        </View>
        {/* pembatas */}
        <Span />
        {/* pembatas */}
        <View style={{backgroundColor: '#fff', paddingVertical: 20, flex : 1}}>
          <View style={{paddingHorizontal: 35, paddingBottom: 5}}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Project</Text>
          </View>
          <View style={{paddingLeft: 60}}>
            <FlatList
              horizontal
              data={[
                {key: 'Project One', number: '01'},
                {key: 'Project Two', number: '02'},
                {key: 'Project Three', number: '03'},
                {key: 'Project Four', number: '04'},
                {key: 'Project Five', number: '05'},
                {key: 'Project Six', number: '06'},
              ]}
              renderItem={({item, index}) => (
                <View>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('UnitAdmin')}>
                    <Card style={{borderRadius: 10}}>
                      <CardItem
                        style={{
                          height: 125,
                          width: 110,
                          borderRadius: 10,
                          backgroundColor: colors[index % colors.length],
                        }}>
                        <Body>
                          <Text style={styles.dasborkonten}>{item.key}</Text>
                          <Text style={styles.dasborkonten}>{item.number}</Text>
                        </Body>
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  welcomeBox: {
    backgroundColor: '#fff',
  },
  dasborkonten: {
    color: '#fff',
  },
});

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: HomeAdmin,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color: tintColor}]} size={25} name={'md-home'} />
          </View>
        ),
      },
    },
      Employee: {
        screen: RouterEmployee,
        navigationOptions: {
          tabBarIcon: ({tintColor}) => (
            <View>
              <Icon style={[{color: tintColor}]} size={25} name={'md-people'} />
            </View>
          ),
        },
      },
    //   Unit: {
    //     screen: RouteUnit,
    //     navigationOptions: {
    //       tabBarIcon: ({tintColor}) => (
    //         <View>
    //           <Icon style={[{color: tintColor}]} size={25} name={'md-contact'} />
    //         </View>
    //       ),
    //     },
    //   },
    //   Jabatan: {
    //     screen: JabatanAdmin,
    //     navigationOptions: {
    //       tabBarIcon: ({tintColor}) => (
    //         <View>
    //           <Icon
    //             style={[{color: tintColor}]}
    //             size={25}
    //             name={'md-briefcase'}
    //           />
    //         </View>
    //       ),
    //     },
    //   },
  },
  {
    initialRouteName: 'Home',
    activeColor: '#1b7ced',
    inactiveColor: '#ccc',
    barStyle: {backgroundColor: '#fff',borderTopWidth : 1, borderTopColor : '#ccc'},
  },
);

export default createAppContainer(TabNavigator);
