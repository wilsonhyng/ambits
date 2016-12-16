import React              from 'react';
import { Component }      from 'react';


import getMuiTheme      from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {deepOrange500}  from 'material-ui/styles/colors';


import Login            from '../login/login.jsx';
import * as loginCtrl   from '../login/loginCtrl';

// Redux
import { connect }      from 'react-redux';
import { loadAmbits, updateTitle, updateCurDay }
                        from '../_actions/ambit-actions';


const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
  },
};

const splashStyle = {
  textAlign: 'center',
  marginTop: 100
}

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

class LoginSplash extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {
    document.body.style.backgroundColor = '#FFF7DF';

    const LoginModal = (<Login main={this} />);


    return (
     <MuiThemeProvider muiTheme={muiTheme}>
      <div className="loginTitle" style={splashStyle}>
        <h1>Ambitually</h1>
        <span>A Smarty Sprouts Production</span>
        {LoginModal}
      </div>
    </MuiThemeProvider>
    );
  }
}



export default LoginSplash;
