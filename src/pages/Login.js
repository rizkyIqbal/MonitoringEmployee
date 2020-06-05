import React, {Component} from 'react';

import {Button} from 'react-native-paper';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  TextInput,
} from 'react-native';


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: '', error: '', loading: false};
  }

  loginPress() {
    if (this.state.email === 'admin') {
      this.props.navigation.navigate('HomeAdmin');
    } else {
      this.props.navigation.navigate('HomeEmployee');
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#67557a" barStyle="light-content" />
        <View style={{flex : 1}}>

        </View>
        <View style={styles.judul}>
          <Text style={styles.loginJudul}>Login</Text>
        </View>
        <TextInput
          style={styles.inputBox}
          placeholder="Email address"
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <TextInput
          style={styles.inputBox}
          placeholder="Password"
          secureTextEntry={true}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />
        <Button
          title="Login"
          mode="contained"
          color={'#1b7ced'}
          onPress={this.loginPress.bind(this)}
          style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Button>
        <View style={styles.signupTextCont} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },

  judul: {
    marginRight : 240,
    marginBottom : 20
  },

  loginJudul: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'none',
  },

  inputBox: {
    marginVertical: 15,
    backgroundColor: '#fff',
    width: 300,
    borderRadius: 0,
    paddingHorizontal: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 0,
  },

  button: {
    width: 300,
    height: 40,
    marginTop : 30
  },

  buttonText: {
    textTransform: 'none',
  },

  signupTextCont: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginVertical: 30,
    flexDirection: 'row',
  },

  signupText: {
    fontSize: 16,
  },

  signupButton: {
    fontWeight: '500',
    fontSize: 16,
    color: 'blue',
  },
});
