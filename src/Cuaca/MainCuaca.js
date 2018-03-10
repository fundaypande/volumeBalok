import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';
import { StackNavigator } from 'react-navigation';

import Header from './Header'

export default class MainCuaca extends Component {
  constructor(props){
    super(props);
    this.state = {
      kota : ''
    };
  }

  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#2196F3',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    }
  };

  render() {
    return (
      <View>
        <Text>Masukkan Nama Kota</Text>
        <TextInput
          onSubmitEditing = {
            (event) => this.setState({ kota: event.nativeEvent.text })
          }
        />
        <Text>Kota : { this.state.kota }</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => MainCuaca);
