import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import icSettings from '../../../icons/ic_settings.png';

export default class SettingButton extends Component {
    render() {
        return (
            <TouchableOpacity>
                <Image style={styles.button} source={icSettings} />
            </TouchableOpacity>
        );
    }
}
