import React                from 'react';
import { Component }        from 'react';
import Ambit                from './ambitOfWeek.jsx'
import { Link }             from 'react-router';

//material-ui
import Paper                from 'material-ui/Paper';
import { List, ListItem }   from 'material-ui/List';
import FloatingActionButton from 'material-ui/FloatingActionButton';

let paperStyle = {
  height: 70,
  marginTop: '12px',
  marginLeft: '8px',
  marginRight: '8px',
  textAlign: 'center',
  display: 'flex',
};

const btnStyle = {
  marginTop: 5,
  marginLeft: 8,
  marginRight: 15,
  transition: 'none'
};

const btnText = {
  fontSize: '20px',
  color: 'white'
};

const log = () => {
  console.log('mouse over')
};

const Day = (props) => (
  <Link to='/day' >
    <Paper
      style={paperStyle}
      zDepth={2}
      onClick={props.handleDayClick.bind(null, props.date)}
    >
      <FloatingActionButton
        backgroundColor={'purple'}
        children={props.day}
        style={btnStyle}
        zDepth={0}
        iconStyle={btnText}
        key={-1}
      />
      <div>
        {props.ambitsOfDay.map((ambit, index) => (index < 4) ? <Ambit ambit={ambit} key={index}/> : null)}
      </div>
    </Paper>
  </Link>
);

export default Day;
