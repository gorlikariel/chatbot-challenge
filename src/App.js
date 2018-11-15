import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme.js';
import Chatroom from './containers/Chatroom/Chatroom';
import MessageBox from './components/MessageBox';
import io from 'socket.io-client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      message: '',
      messages: [],
      messageValues: [],
      open: true
    };

    this.socket = io('localhost:5000');

    this.socket.on('RECEIVE_MESSAGE', function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      this.setState({
        messages: [...this.state.messages, data],
        messageValues: [...this.state.messageValues, data.message]
      });
    };
  }

  render() {
    const { username, message, messages, open, messageValues } = this.state;
    const doesLastMessageMatch = whatToMatch =>
      messageValues[messageValues.length - 1]
        .toLowerCase()
        .replace(/'/g, '') === whatToMatch;
    return (
      <MuiThemeProvider theme={theme}>
        <Chatroom
          message={message}
          username={username}
          messages={messages}
          open={open}
          submitUsername={username => {
            this.setState({ username: username, open: false });
          }}
        />
        <MessageBox
          sendMessage={message => {
            const isBot = false;
            this.socket.emit('SEND_MESSAGE', {
              author: this.state.username,
              message: message
            });
            if (messages.length >= 2) {
              if (
                doesLastMessageMatch(
                  'whats your favorite programming language?'
                ) ||
                doesLastMessageMatch('whats your favorite language?') ||
                doesLastMessageMatch('whats the best programming language?') ||
                doesLastMessageMatch(
                  'whats the best programming language ever?'
                )
              ) {
                this.socket.emit('SEND_MESSAGE', {
                  author: '[BOT]',
                  message:
                    message.toLowerCase() === 'javascript' ||
                    message.toLowerCase() === 'js'
                      ? 'Good... I like you..'
                      : 'Shame on you, get out of my chat'
                });
              }
              if (
                doesLastMessageMatch('is js the best?') ||
                doesLastMessageMatch('is javascript the best?') ||
                doesLastMessageMatch('is pizza the best?') ||
                doesLastMessageMatch(
                  'is javascript the best programming language?'
                ) ||
                doesLastMessageMatch('is pizza the best food?')
              ) {
                this.socket.emit('SEND_MESSAGE', {
                  author: '[BOT]',
                  message:
                    message.toLowerCase() === 'yes' ||
                    message.toLowerCase() === 'yup' ||
                    message.toLowerCase() === 'of course'
                      ? 'You got lucky....'
                      : 'YOU ARE DISGUSTING'
                });
              }
              if (
                doesLastMessageMatch('whats your favorite food?') ||
                doesLastMessageMatch('whats the best kind of food?') ||
                doesLastMessageMatch('whats the best food?')
              ) {
                this.socket.emit('SEND_MESSAGE', {
                  author: '[BOT]',
                  message:
                    message.toLowerCase() === 'pizza'
                      ? 'Thank god'
                      : 'GET OUT OF MY SWAMP'
                });
              }
            }

            if ((messages.length + 1) % 2 !== 0 && messages.length) {
              const doesBotKnowTheAnswer = messageValues.indexOf(message);
              if (doesBotKnowTheAnswer !== -1) {
                this.socket.emit('SEND_MESSAGE', {
                  author: '[BOT]',
                  message: messageValues[doesBotKnowTheAnswer + 1]
                });
              }
            }
          }}
        />
      </MuiThemeProvider>
    );
  }
}

export default App;
