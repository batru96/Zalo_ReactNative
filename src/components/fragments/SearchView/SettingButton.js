import React, { Component } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import styles from './Styles';
import icSettings from '../../../icons/ic_vertical_setting.png';

export default class SettingButton extends Component {
    onPress() {
        const { navigation } = this.props;
        if (navigation) {
            navigation.navigate('SETTING');
        }
    }
    render() {
        return (
            <TouchableOpacity onPress={this.onPress.bind(this)}>
                <Image style={styles.button} source={icSettings} />
            </TouchableOpacity>
        );
    }
}
