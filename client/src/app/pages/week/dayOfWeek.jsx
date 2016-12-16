import React                from 'react';
import { Component }          from 'react';
import Ambit                from './ambitOfWeek.jsx'
import { Link }               from 'react-router';

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


const paperStyle = {
  height: 60,
  width: 315,
  margin: 10,
  marginTop: 12,
  marginRight: 10
  textAlign: 'center',
  float: 'left',
  display: 'flex'
};

const btnStyle = {
  margin: 0,
  marginTop: 3,
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


const Day = (props) => {
  return (
    <Paper style={paperStyle} zDepth={2} onClick={props.handleDayClick.bind(null, props.date)}>
      <Link to='/'>
        <FloatingActionButton  
          backgroundColor='purple'
          style={btnStyle}
        ><p style={btnText}> {props.day} </p>
        </FloatingActionButton>
      </Link>
      <div>
        {props.ambitsOfDay.map((ambit, index) =>
          <Ambit ambit={ambit} key={index}/>
        )}
      </div>
    </Paper>
  );
}

export default Day;