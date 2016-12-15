import React            from 'react';
import {Component}      from 'react';
import Ambit            from './ambitOfWeek.jsx'
import Day              from './dayOfWeek.jsx'

import {List, ListItem} from 'material-ui/List';

const weekList = (props) => {
  return (
    <List>
      <ListItem>
        {props.days.map((day, index) => 
          <Day day={day} ambits={props.ambits[index]} key={index} />
        )}
      </ListItem>
    </List>
  );
}

export default weekList;