import React, { Component } from 'react';
import { View } from 'react-native';
import MainStack from './Router';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MainStack />
      </View>
    );
  }
}
