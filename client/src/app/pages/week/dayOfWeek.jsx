import React            from 'react';
import {Component}      from 'react';
import Ambit            from './ambitOfWeek.jsx'
import Paper            from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';

const style = {
  height: 60,
  width: 315,
  margin: 10,
  textAlign: 'center',
  display: 'inline-block',

  marginTop: 12,
  marginRight: 10
};

const divStyle = {
  textAlign: 'center'
};

const h1Style = {
  margin: 0,
  top: 'auto',
  right: 8,
  bottom: 16,
  left: 'auto',
  position: 'fixed',
}




const Day = (props) => {
  return (
    <Paper style={style} zDepth={2}>
      <div>
        <FloatingActionButton mini={true} /*disabled={!this.state.weekdays[0]}*/ style={style} backgroundColor='purple' /*onTouchTap={test}*/>
          <div style={h1Style}>
            <h1>{props.day}</h1>
          </div>
        </FloatingActionButton>

        <div>
          {props.ambits.map((ambit) =>
            <Ambit 
              ambit={ambit}
            />
          )}
        </div>
      </div>
    </Paper>
  );
}

export default Day;