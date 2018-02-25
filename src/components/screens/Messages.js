import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MessagesHeader from '../fragments/MessagesHeader';

class Messages extends Component {
    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <MessagesHeader />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default Messages;
