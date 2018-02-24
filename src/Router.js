import React, { Component } from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import SignIn from './components/SignIn';
import Register from './components/Register';

const MainStack = StackNavigator({
    SIGN_IN: {
        screen: SignIn,
        navigationOptions: {
            header: null
        }
    },
    REGISTER: {
        screen: Register,
        navigationOptions: {
            header: null
        }
    }
});


