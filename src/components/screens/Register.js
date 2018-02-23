import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Dimensions } from 'react-native';
import Header from '../fragments/Header';
import icBack from '../../icons/ic_back.png';

const { width } = Dimensions.get('window');
export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    render() {
        const {
            container, header, buttonBack, title, nameTitle, input,
            nextButton, nextBtnText,
        } = styles;
        return (
            <View style={container}>
                <Header title="Name"/>
                <Text style={nameTitle}>What's Your Full Name?</Text>
                <Text style={{ textAlign: 'center' }}>Using real name makes you more recognizable.</Text>
                <TextInput
                    style={input}
                    underlineColorAndroid="transparent"
                    value={this.state.name}
                    placeholder="Enter your full name"
                    onChangeText={text => this.setState({ name: text })}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={nextButton}>
                        <Text style={nextBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#effaed'
    },
    nameTitle: {
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        marginVertical: 10,
        fontSize: 15
    },
    input: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 40,
        paddingHorizontal: 16,
    },
    nextButton: {
        backgroundColor: '#3975e8',
        width: width / 2,
        marginTop: 20,
        padding: 6,
        borderRadius: 16
    },
    nextBtnText: {
        color: 'white',
        textAlign: 'center'
    }
});