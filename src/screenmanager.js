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
import BalokScreen from './Balok/VolumeBalok';
import SegitigaScreen from './Segitiga/segitiga';
import HomeScreen from './home';
import CuacaScreen from './Cuaca/Cuaca';

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
  Cuaca: {
    screen: CuacaScreen,
    navigationOptions: {
      title: 'Ramalan Cuaca',
      headerStyle: {
        backgroundColor: '#2196F3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
  },
  Segitiga: {
    screen: SegitigaScreen,
    navigationOptions: {
      title: 'Perhitungan Segitiga',
      headerStyle: {
        backgroundColor: '#2196F3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
  },
  Balok: {
    screen: BalokScreen,
    navigationOptions: {
      title: 'Perhitungan Volume Balok',
      headerStyle: {
        backgroundColor: '#2196F3',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      }
    },
  },
});

export default Screens;
