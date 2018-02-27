import React, { Component } from 'react';
import { View } from 'react-native';
import SearchView from '../fragments/SearchView';
import { MainTab } from '../../Router';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchView />
                <MainTab />
            </View>
        );
    }
}
