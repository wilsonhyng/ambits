import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

class Login extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      username: '',
      email: '',
      password: '',
      loginIsOpen: this.props.startsOpen,
      isSigningUp: false,
    };
  };

  handleLogin = () => {
    var loginObject = {
      email: this.state.email,
      password: this.state.password
    };
    // Do Login stuff here
    this.setState({
      loginIsOpen: false,
    });
  };

  handleSignUp = () => {
    var signUpObject = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password
    };

    this.setState({
      isSigningUp: false
    });
  };

  handleChange = (name,e) => {
    this.setState({
      [name]: e.target.value
    });
  };

  toggleSignUp = () => {
    this.setState({
      isSigningUp: !this.state.isSigningUp
    });
  };

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
    );
  }
}

export default Login;
