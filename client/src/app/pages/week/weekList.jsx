import React            from 'react';
import {Component}      from 'react';
import Ambit            from './ambitOfWeek.jsx'
import Day              from './dayOfWeek.jsx'

// import {List, ListItem} from 'material-ui/List';

const dayStyle = {
  color: 'white'
}

const weekList = (props) => {
  return (
    <div style={dayStyle}>
      {props.days.map((day, index) =>
        <Day day={day} ambitsOfDay={props.ambits[index]} key={index} />
      )}
    </div>
  );
}

export default weekList;