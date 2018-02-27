import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions
} from 'react-native';
import Header from '../fragments/Header';

const { width } = Dimensions.get('window');
export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    login() {
        this.props.navigation.navigate('MAIN_TAB');
    }
    render() {
        const { username, password } = this.state;
        const { container, title, input, nextButton, nextBtnText } = styles;
        return (
            <View style={container}>
                <Header title="Login" navigation={this.props.navigation} />
                <Text style={title}>You can login with your phone number or username</Text>
                <TextInput
                    style={input}
                    value={username}
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ username: text })}
                    placeholder="Phone number or username"
                />
                <TextInput
                    style={input}
                    value={password}
                    secureTextEntry
                    underlineColorAndroid="transparent"
                    onChangeText={text => this.setState({ password: text })}
                    placeholder="Password"
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        style={nextButton}
                        onPress={this.login.bind(this)}
                    >
                        <Text style={nextBtnText}>LOGIN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={{ color: '#3975e8' }} s>Recover password</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f3f6'
    },
    title: {
        textAlign: 'center',
        marginVertical: 25
    },
    input: {
        height: 36,
        backgroundColor: 'white',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderColor: '#f0f3f6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nextButton: {
        backgroundColor: '#3975e8',
        width: width / 2,
        marginTop: 20,
        padding: 6,
        borderRadius: 16,
        marginBottom: 16
    },
    nextBtnText: {
        color: 'white',
        textAlign: 'center'
    },

});
