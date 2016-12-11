/**
 * In this file, we create a React component
 * which incorporates components provided by Material-UI.
 */
import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import {deepOrange500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class Main extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      open: true,
    };
  }

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  }

  handleTouchTap = () => {
    this.setState({
      open: true,
    });
  }

  render() {
    const standardActions = [
      <FlatButton
        label="Login"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />,
      <FlatButton
        label="Signup"
        primary={true}
        onTouchTap={this.handleRequestClose}
      />
    ];

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title="Ambitually"></AppBar>
          <Dialog
            overlayClassName="hidden"
            open={this.state.open}
            title="Welcome!"
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            <TextField 
              fullWidth={true}
              hintText="email" /><br/>
            <TextField
              fullWidth={true}
              hintText="password" /><br/>
          </Dialog>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
