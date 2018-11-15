import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme.js';
import Chatroom from './containers/Chatroom/Chatroom';
import MessageBox from './components/MessageBox';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Chatroom />
        <MessageBox />
      </MuiThemeProvider>
    );
  }
}

export default App;
