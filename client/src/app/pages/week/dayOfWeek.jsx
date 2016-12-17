import React                from 'react';
import { Component }        from 'react';
import Ambit                from './ambitOfWeek.jsx'
import { Link }             from 'react-router';

//material-ui
import Paper                from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';


const paperStyle = {
  height: '70px',
  marginTop: '12px',
  marginLeft: '8px',
  marginRight: '8px',
  textAlign: 'center',
  float: 'none',
  display: 'flex',
};

const btnStyle = {
  marginTop: 5,
  marginLeft: 8,
  marginRight: 4,
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
  <Link to='/'>
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
        >
        </FloatingActionButton>
      <div>
        {props.ambitsOfDay.map((ambit, index) =>
          <Ambit ambit={ambit} key={index}/>
        )}
      </div>
    </Paper>
  </Link>
);

export default Day;
