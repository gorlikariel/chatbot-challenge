import React from 'react';
import {
  Paper,
  Divider,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
  Typography,
  TextField,
  ButtonBase
} from '@material-ui/core';
import styled from 'styled-components';
import { C1, C3 } from '../../theme';

class Chatroom extends React.Component {
  state = { open: true, usernameInput: '' };
  handleSubmit = () => {
    this.setState({ open: false });
  };
  render() {
    const Container = styled.div`
      display: flex;
      justify-content: center;
      margin-top: 20px;
      align-items: center;
    `;
    const Chat = styled.div`
      border: 1px solid ${C1};
      border-radius: 25px;
      box-shadow: 0 4px 14px 1px #d4dde558, 0 4px 6px -2px #8ea9c33f;
      width: 50vmax;
      height: 80vh;
      padding: 25px;
    `;

    return (
      <>
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
              value={this.state.usernameInput}
              label="Name"
              onChange={e => {
                this.setState({ usernameInput: e.target.value });
              }}
            />
            <Button
              id="agreeDialog"
              onClick={this.handleSubmit}
              color="primary"
              autoFocus={true}
              style={{ marginTop: '20px' }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>

        <Container>
          <Chat>
            hello <Divider />
            WASSSUP
          </Chat>
        </Container>
      </>
    );
  }
}

export default Chatroom;
