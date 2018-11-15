import React from 'react';
import {
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
  ButtonBase,
  Fade
} from '@material-ui/core';
import styled from 'styled-components';
import { C1, C3 } from '../../theme';
import TextField from '../../components/TextField';
import MessageBox from '../../components/MessageBox';
import { throws } from 'assert';

class Chatroom extends React.Component {
  state = { username: '', pizza: false };
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.open !== this.props.open) {
      setTimeout(() => {
        this.setState({ pizza: true });
      }, 2000);
    }
  }
  usernameChanged = e => {
    this.setState({ username: e.target.value });
  };
  handleSubmit = () => {
    this.props.submitUsername(this.state.username);
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
      overflow: auto;
    `;

    return (
      <div>
        <Dialog open={this.props.open} disableBackdropClick={true}>
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
              onClick={this.handleSubmit}
              color="primary"
              style={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Fade in={!this.props.open} timeout={400}>
          <Typography
            variant="h4"
            color="textPrimary"
            style={{ paddingLeft: '20px', paddingTop: '20px' }}
          >
            The bot doesn't respect people who aren't JavaScript lovers.
          </Typography>
        </Fade>
        <Fade in={this.state.pizza} timeout={1500}>
          <Typography
            variant="h4"
            color="textPrimary"
            style={{ paddingLeft: '20px', paddingTop: '5px' }}
          >
            Or pizza lovers.
          </Typography>
        </Fade>
        <Container>
          <Chat>
            {this.props.messages.map((message, index) => {
              return message.message === '' ? null : (
                <div key={index}>
                  {message.author}: {message.message}
                  <Divider />
                </div>
              );
            })}
          </Chat>
        </Container>
      </div>
    );
  }
}

export default Chatroom;
