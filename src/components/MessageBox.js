import React, { Component } from 'react';
import TextField from './TextField';
import { Button, Paper } from '@material-ui/core';
import styled from 'styled-components';
import { C1 } from '../theme';

class MessageBox extends Component {
  state = { message: '' };
  messageChanged = e => {
    e.preventDefault();
    this.setState({ message: e.target.value });
  };
  sendMessage = () => {
    this.props.sendMessage(this.state.message);
    this.setState({ message: '' });
  };
  render() {
    const Container = styled.div`
      width: 100%;
      padding: 25px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
    `;

    return (
      <Container>
        <TextField
          autoFocus={true}
          type="text"
          key={this.state.message}
          value={this.state.message}
          label="Write a message"
          onChange={this.messageChanged}
        />
        <Button
          onClick={this.sendMessage}
          color="primary"
          style={{ marginTop: '20px' }}
        >
          Send
        </Button>
      </Container>
    );
  }
}

export default MessageBox;
