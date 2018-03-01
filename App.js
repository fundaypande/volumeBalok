import React, { Component } from 'react';
import { AppRegistry, TextInput, View, TouchableOpacity,} from 'react-native';

import { Container, Header, Button, Icon, Title,
  Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';

export default class mainin extends Component {
  constructor(props){
    super(props)
    this.state = {
      alas:0,
      tinggi:0,
      luas:0
    };
  }

  render() {
    const { navigate } = this.props.navigation

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Fundays App</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
        <TouchableOpacity onPress={() => navigate('segitiga')}>
          <Text>Go to first screen!!</Text>
        </TouchableOpacity>
          <List onPress={() => navigate('segitiga')}>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('./../assets/Logo.jpg')} />
              </Left>
              <Body>
                <Text>Perhitungan Segitiga</Text>
                <Text note>Menghitung luas segitiga secara cepat dan tepat . . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>


          <View style = {{flex:1,backgroundColor:'#bbdefb'}}>

        <View style={{backgroundColor:'#2196f3'}}>
           <Text style = {{padding: 10, fontSize: 20, color: 'white', textAlign:'center'}} >
            Menghitung Luas Persegi Panjang
          </Text>
         </View>

        <View style={{margin:20,padding: 10, backgroundColor:'#e3f2fd'}}>
            <TextInput style = {{height: 40}}
              placeholder="Masukkan Panjang"
              onChangeText={(alas)=>this.setState({alas})}
              keyboardType = 'numeric'
            />
            <TextInput style = {{height: 40}}
              placeholder="Masukkan  Lebar"
              onChangeText={(tinggi)=>this.setState({tinggi})}
              keyboardType = 'numeric'
            />

            <Button
              onPress={()=>this.setState({
                luas: (this.state.alas*this.state.tinggi/2)
              })}
              title="Hitung"
              accessibilityLabel="Klik untuk menghitung"
            ></Button>
       </View>

        <View style={{margin:20, backgroundColor:'#90caf9'}}>
          <Text style = {{padding: 10, fontSize: 20}} >
              Panjang =  {this.state.alas} {"\n"}
              Lebar =  {this.state.tinggi} {"\n"}
              Luas = {(this.state.alas*this.state.tinggi/2)}
          </Text>
         </View>
   </View>


        </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('AppForm2', () => main);
