import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import Header from '../fragments/Header';

const { width } = Dimensions.get('window');
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }
    getTitleName() {
        const { params } = this.props.navigation.state;
        if (params !== undefined) return params.title;
        return 'Name';
    }
    render() {
        const {
            container, nameTitle, input, nextButton, nextBtnText, nextButtonDisable
        } = styles;
        const isDisable = this.state.name === '';
        return (
            <View style={container}>
                <Header title={this.getTitleName()} navigation={this.props.navigation} />
                <Text style={nameTitle}>What's Your Full Name?</Text>
                <Text style={{ textAlign: 'center' }}>
                    Using real name makes you more recognizable.
                </Text>
                <TextInput
                    style={input}
                    underlineColorAndroid="transparent"
                    value={this.state.name}
                    placeholder="Enter your full name"
                    placeholderTextColor="#ececec"
                    onChangeText={text => this.setState({ name: text })}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={isDisable ? nextButtonDisable : nextButton}
                        disabled={isDisable}
                    >
                        <Text style={nextBtnText}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
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
        marginVertical: 10,
        fontSize: 14
    },
    input: {
        marginTop: 20,
        backgroundColor: 'white',
        height: 40,
        paddingHorizontal: 16,
        borderWidth: 0.5,
        borderColor: '#ececec'
    },
    nextButton: {
        backgroundColor: '#3975e8',
        width: width / 2,
        marginTop: 20,
        padding: 6,
        borderRadius: 16
    },
    nextButtonDisable: {
        backgroundColor: '#a9d7fa',
        width: width / 2,
        marginTop: 20,
        padding: 6,
        borderRadius: 16
    },
    nextBtnText: {
        color: 'white',
        textAlign: 'center'
    },

});

export default Register;
