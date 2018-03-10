/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import MainScreen from './main';
import FirstScreen from './segitiga';
import HomeScreen from './home';
import Cuaca from './Cuaca/Cuaca';

const Screens = StackNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#2196F3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
  },
  MainScreen: {
    screen: MainScreen
  },
  segitiga: {
    screen: FirstScreen
  },
  Cuaca: {
    screen: Cuaca
  },
});

export default Screens;
