import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import styles from './Styles';
import icAdd from '../../../icons/ic_add.png';

export default class AddButton extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Image style={styles.button} source={icAdd} />
            </TouchableOpacity>
        );
    }
}
