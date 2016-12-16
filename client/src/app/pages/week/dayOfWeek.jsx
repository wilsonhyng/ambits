import React                from 'react';
import { Component }        from 'react';
import Ambit                from './ambitOfWeek.jsx'
import { Link }             from 'react-router';

//material-ui
import Paper                from 'material-ui/Paper';
import FloatingActionButton from 'material-ui/FloatingActionButton';


// const style = {
//   height: 100,
//   width: 100,
//   margin: 20,
//   textAlign: 'center',
//   display: 'inline-block',
// };

// const ambitStyle = {
//   float: 'left'
// }

const paperStyle = {
  height: 65,
  width: 315,
  marginTop: '5%',
  // marginRight: 10,
  textAlign: 'center',
  float: 'none',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
};

const btnStyle = {
  margin: 0,
  marginTop: 4,
  marginLeft: 3,
  marginRight: 3,
  color: '#f7f2f7',
  fontSize: 10
};

const btnText = {
  fontSize: '20px',
  color: 'white',
  lineHeight: 'none'
};


const Day = (props) => (
  <Paper style={paperStyle} zDepth={2} onClick={props.handleDayClick.bind(null, props.date)}>
    <Link to='/'>
      <FloatingActionButton  
        backgroundColor='purple'
        style={btnStyle}
        zDepth={0}
      >
        <p style={btnText}> {props.day} </p>
      </FloatingActionButton>
    </Link>
    <div>
      {props.ambitsOfDay.map((ambit, index) =>
        <Ambit ambit={ambit} key={index}/>
      )}
    </div>
  </Paper>
);


export default Day;
