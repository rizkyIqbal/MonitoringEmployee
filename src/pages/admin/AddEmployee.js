import React, {Component} from 'react';
import {Container, Header, Content, Input, Item} from 'native-base';
import {BottomNavigation, Text} from 'react-native-paper';
import {
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
  Picker,
} from 'native-base';
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

export default class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  render() {
    return (
      <Container>
        <Content>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.props.navigation.goBack()}>
            <View
              style={{
                flex: 1,
                height: 90,
                backgroundColor: '#3F51B5',
              }}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  paddingTop: 20,
                  paddingLeft: 15,
                }}>
                <View>
                  <Icon
                    name="chevron-left"
                    size={30}
                    style={{
                      color: '#fff',
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{
                      color: '#fff',
                      fontSize: 20,
                    }}>
                    Back
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <View
            style={{
              paddingVertical: 40,
              paddingHorizontal: 40,
              borderRadius: 30,
              marginTop: -25,
              backgroundColor: '#fff',
            }}>
            <Text
              style={{
                fontSize: 30,
                left: 70,
                marginBottom: 50,
                fontWeight: 'bold',
              }}>
              Add Employee
            </Text>
            <View style={styles.form}>
              <Text style={styles.textForm}>Full Name</Text>
              <Item regular style={styles.inputBox}>
                <Input />
              </Item>
            </View>
            <View style={styles.form}>
              <Text style={styles.textForm}>Email</Text>
              <Item regular style={styles.inputBox}>
                <Input />
              </Item>
            </View>
            <View style={styles.form}>
              <Text style={styles.textForm}>Phone Number</Text>
              <Item regular style={styles.inputBox}>
                <Input />
              </Item>
            </View>
            <View style={styles.form}>
              <Text style={styles.textForm}>Pangkat</Text>
              <Picker
                note
                mode="dropdown"
                style={{width: 120}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="Pangkat 1" value="key0" />
                <Picker.Item label="Pangkat 2" value="key1" />
                <Picker.Item label="Pangkat 3" value="key2" />
                <Picker.Item label="Pangkat 4" value="key3" />
                <Picker.Item label="Pangkat 5" value="key4" />
              </Picker>
            </View>
            <View style={styles.form}>
              <Text style={styles.textForm}>Jabatan</Text>
              <Picker
                note
                mode="dropdown"
                style={{width: 120}}
                selectedValue={this.state.selected}
                onValueChange={this.onValueChange.bind(this)}>
                <Picker.Item label="Jabatan 1" value="key0" />
                <Picker.Item label="Jabatan 2" value="key1" />
                <Picker.Item label="Jabatan 3" value="key2" />
                <Picker.Item label="Jabatan 4" value="key3" />
                <Picker.Item label="Jabatan 5" value="key4" />
              </Picker>
            </View>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Employee')}>
              <View
                style={{
                  backgroundColor: '#1663C7',
                  marginTop: 40,
                  borderRadius: 20,
                  paddingVertical: 15,
                }}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: 15,
                    textAlign: 'center',
                  }}>
                  Tambah Pegawai
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  form: {
    marginVertical: 10,
  },

  textForm: {
    marginBottom: 10,
    fontSize: 15,
  },

  inputBox: {
    height: 40,
  },
});
