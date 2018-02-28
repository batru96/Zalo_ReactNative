import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import TabMesage from './components/screens/ListMessage';
import TabContact from './components/screens/ListContact';
import TabComponents from './components/screens/ListComponents';
import SignIn from './components/screens/SignIn';
import MainSignIn from './components/screens/MainSignIn';
import Register from './components/screens/Register';
import Home from './components/screens/Home';
import icMessages from './icons/ic_mesages.png';
import icTimer from './icons/ic_clock.png';
import icContact from './icons/ic_contact.png';

export const SignInStack = StackNavigator({
    MAIN_SIGN_IN: {
        screen: MainSignIn,
        navigationOptions: {
            header: null
        }
    },
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

export const MainTab = TabNavigator({
    TAB_MESSAGE: {
        screen: TabMesage
    },
    TAB_CONTACT: {
        screen: TabContact
    },
    TAB_COMPONENTS: {
        screen: TabComponents
    }
},
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'TAB_MESSAGE') {
                    iconName = icMessages;
                } else if (routeName === 'TAB_CONTACT') {
                    iconName = icContact;
                } else if (routeName === 'TAB_COMPONENTS') {
                    iconName = icTimer;
                }
                const myColor = focused ? tintColor : 'gray';
                return (
                    <Image
                        source={iconName}
                        style={{ width: 20, height: 20, tintColor: myColor }}
                    />
                );
            },
            // tabBarOnPress: ({ scene, jumpToIndex }) => {
            //     console.log('----------');
            //     console.log(scene);
            //     jumpToIndex(scene.index);
            // },
        }),
        tabBarOptions: {
            activeTintColor: '#4b8bff',
            inactiveTintColor: 'gray',
            showLabel: false,
            style: {
                height: 40
            }
        },
        tabBarComponent: TabBarBottom,
        tabBarPosition: 'bottom',
        swipeEnabled: true,
    },
);

const MainStack = StackNavigator({
    SIGN_IN_STACK: {
        screen: SignInStack,
        navigationOptions: {
            header: null,
        }
    },
    MAIN_TAB: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
});

export default MainStack;
