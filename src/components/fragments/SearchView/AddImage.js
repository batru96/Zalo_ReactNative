import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import icAddImage from '../../../icons/ic_add_image_white.png';

export default class AddImage extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Image style={styles.button} source={icAddImage} />
            </TouchableOpacity>
        );
    }
}
