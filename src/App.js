import React, { Component } from 'react';
import { View } from 'react-native';
import SearchView from './components/fragments/SearchView';
import MainTab from './Router';

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SearchView />
        <MainTab />
      </View>
    );
  }
}
