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
      username: '',
      email: '',
      password: '',
      loginIsOpen: true,
      isSigningUp: false,
    };
  }

  handleLogin = () => {
    var loginObject = {
      email: this.state.email,
      password: this.state.password
    };

    this.setState({
      loginIsOpen: false,
    });
  }
  handleChange = (name,e) => {
    this.setState({
      [name]: e.target.value
    });
  }

  handleSignUp = () => {
    var signUpObject = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      isSigningUp: false
    });
  }

  toggleSignUp = () => {
    this.setState({
      isSigningUp: !this.state.isSigningUp
    });
  }

  render() {
    const signUp = this.state.isSigningUp;
    const signUpField = signUp ? 
      (<TextField 
        onChange={this.handleChange.bind(this,'username')}
        fullWidth={true}
        hintText='username' />) :
      null;

    const standardActions = [
      <RaisedButton
        label='Login'
        primary={!this.state.isSigningUp}
        onTouchTap={(!signUp) ? 
          this.handleLogin : 
          this.toggleSignUp.bind(this)
        }
      />,
      <RaisedButton
        label='Signup'
        primary={this.state.isSigningUp}
        onTouchTap={(signUp) ? 
          this.handleSignUp :
          this.toggleSignUp.bind(this)
        }
      />
    ];

    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div>
          <AppBar title='Ambitually'></AppBar>
          <Dialog
            overlayClassName='hidden'
            open={this.state.loginIsOpen}
            title='Welcome!'
            actions={standardActions}
            modal={true}
          >
            <TextField 
              onChange={this.handleChange.bind(this,'email')}
              fullWidth={true}
              hintText='email' />
            {signUpField}
            <TextField
              onChange={this.handleChange.bind(this,'password')}
              fullWidth={true}
              hintText='password'
              type='password'
             />
          </Dialog>



        </div>
      </MuiThemeProvider>
    );
  }
}

export default Main;
