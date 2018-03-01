import React, { Component } from 'react';
import { View } from 'react-native';
import SearchView from '../fragments/SearchView';
import { MainTab } from '../../Router';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tabIndex: 0
        };
    }
    onNavigationStateChange(prevState, nextState) {
        this.setState({
            tabIndex: nextState.index
        });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <SearchView tabIndex={this.state.tabIndex} navigation={this.props.navigation} />
                <MainTab onNavigationStateChange={this.onNavigationStateChange.bind(this)} />
            </View>
        );
    }
}
