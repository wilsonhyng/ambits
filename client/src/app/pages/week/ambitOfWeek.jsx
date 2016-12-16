import React            from 'react';
import {Component}      from 'react';

//material-ui
import FloatingActionButton from 'material-ui/FloatingActionButton';

const btnStyle = {
  // margin: 0,
  marginTop: 10,
  marginLeft: 3,
  marginRight: 3,
  color: '#f7f2f7',
  backgroundColor: '#f7f2f7'
};

const btnText = {
  fontSize: '10px',
  color: 'white',
  lineHeight: 'none'
};


const Ambit = (props) => (
  <FloatingActionButton
    style={btnStyle}
    mini={true}
    zDepth={0}
    /*onTouchTap={test}*/
  >
    <p style={btnText}> {props.ambit.name} </p>
  </FloatingActionButton>
);


export default Ambit;
