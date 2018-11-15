import React from 'react';
import io from 'socket.io-client';
import {
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
  ButtonBase
} from '@material-ui/core';
import styled from 'styled-components';
import { C1, C3 } from '../../theme';
import TextField from '../../components/TextField';
import MessageBox from '../../components/MessageBox';

class Chatroom extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      open: true,
      message: '',
      messages: []
    };

    this.socket = io('localhost:5000');

    this.socket.on('RECEIVE_MESSAGE', function(data) {
      addMessage(data);
    });

    const addMessage = data => {
      this.setState({ messages: [...this.state.messages, data] });
    };

    this.sendMessage = e => {
      e.preventDefault();
      this.socket.emit('SEND_MESSAGE', {
        author: this.state.username,
        message: this.state.message
      });
      this.setState({ message: '' });
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(this.state);
  }
  handleSubmitUsername = e => {
    e.preventDefault();
    this.setState({ open: false });
  };
  usernameChanged = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };
  render() {
    const Container = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 20px;
      align-items: center;
      flex-direction: column;
    `;
    const Chat = styled.div`
      border: 1px solid ${C1};
      border-radius: 25px;
      box-shadow: 0 4px 14px 1px #d4dde558, 0 4px 6px -2px #8ea9c33f;
      width: 50vmax;
      height: 65vh;
      padding: 25px;
      display: flex;
      flex-direction: column;
    `;

    return (
      <div>
        <Dialog
          open={this.state.open}
          onClose={() => this.setState({ open: false })}
          disableBackdropClick={true}
        >
          <DialogTitle>
            <Typography variant="h3" color="inherit">
              Enter your name
            </Typography>
          </DialogTitle>
          <DialogActions
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '25px',
              flexDirection: 'column'
            }}
          >
            <TextField
              value={this.state.username}
              label="Name"
              onChange={this.usernameChanged}
            />
            <Button
              id="agreeDialog"
              onClick={this.handleSubmitUsername}
              color="primary"
              style={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Typography
          variant="h4"
          color="textPrimary"
          style={{ paddingLeft: '20px', paddingTop: '20px' }}
        >
          The coolest chatroom ever
        </Typography>
        <Container>
          <Chat>
            <Divider />

            {this.state.messages.map((message, index) => {
              return (
                <div key={index}>
                  {message.author}: {message.message}
                  <Divider />
                </div>
              );
            })}
            <div style={{ alignSelf: 'flex-end' }} />
          </Chat>
        </Container>
      </div>
    );
  }
}

export default Chatroom;
