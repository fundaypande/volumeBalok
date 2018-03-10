import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import Header from './Header';
import MainCuaca from './MainCuaca';


export default class Cuaca extends Component {
  constructor(props){
    super(props)
    this.state = {
    };
  }

  render() {
    return (
      <View style = {{flex:1,backgroundColor:'#bbdefb'}}>
        <Header judul= {'Ini Judul Oi'} />
        <MainCuaca />
      </View>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => Cuaca);
