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

const Screens = StackNavigator({
  MainScreen: {screen: MainScreen},
  segitiga: {screen: FirstScreen},

});

export default Screens;
