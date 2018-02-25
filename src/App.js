import React, { Component } from 'react';
// import Router from './Router';
import Register from './components/screens/Register';
import SignIn from './components/screens/SignIn';
import ListComponents from './components/screens/ListComponents';
import ListMessage from './components/screens/ListMessage';
import ListContact from './components/screens/ListContact';
import NewFeed from './components/screens/NewFeed';
import Messages from './components/screens/Messages';

export default class App extends Component {
  render() {
    return <Messages />;
  }
}
