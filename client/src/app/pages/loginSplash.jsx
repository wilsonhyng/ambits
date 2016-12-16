import React              from 'react';
import { Component }      from 'react';

// Redux
import { connect }      from 'react-redux';
import { loadAmbits, updateTitle, updateCurDay }
                        from '../_actions/ambit-actions';

class LoginSplash extends Component {
  constructor(props) {
    super(props);
  }

 
  render() {

    return (
      <h1>Hello</h1>

    );
  }
}



export default LoginSplash;
