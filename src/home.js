//main ini adalah perhitungan volume

import React, { Component } from 'react';
import { AppRegistry, TextInput, View, TouchableOpacity,} from 'react-native';

import { Container, Header, Button, Icon, Title,
  Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class mainin extends Component {
  constructor(props){
    super(props)
    this.state = {
      lebar:0,
      tinggi:0,
      panjang:0

    };
  }

  render() {
    const { navigate } = this.props.navigation

    const styles = {
      textHeader: {
        fontSize: 20,
        padding: 10
      }
    }

    return (
      <Container>
        <Content>
        <TouchableOpacity onPress={() => navigate('segitiga')}>
          <Text style={ styles.textHeader }>Hitung Luas Segitiga</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigate('Cuaca')}>
          <Text style={ styles.textHeader }>Prakiraan Cuaca</Text>
        </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => main);
