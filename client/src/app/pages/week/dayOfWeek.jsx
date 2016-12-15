import React                from 'react';
import {Component}          from 'react';
import Ambit                from './ambitOfWeek.jsx'

//material-ui
import Paper                from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';


const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

// const dayStyle = {
//   textAlign: 'center',
//   marginRight: 20
// };

// const ambitStyle = {
//   float: 'left'
// }

const h1Style = {
  margin: 0,
  top: 'auto',
  right: 8,
  bottom: 16,
  left: 'auto',
  position: 'fixed'
  // textAlign: 'center'
}

const paperStyle = {
  height: 60,
  width: 315,
  margin: 10,
  textAlign: 'center',
  float: 'left',
  display: 'inline-block',

  marginTop: 12,
  marginRight: 10
};


const Day = (props) => {
  return (
    <Paper style={paperStyle} zDepth={2}>
      <FloatingActionButton  
        backgroundColor='purple' 
        children={props.day}
        /*onTouchTap={test}*/>
      </FloatingActionButton>

      <div>
        {props.ambitsOfDay.map((ambit, index) =>
          <Ambit ambit={ambit} key={index}/>
        )}
      </div>
    </Paper>
  );
}

export default Day;