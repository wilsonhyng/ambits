import React            from 'react';
import FlatButton       from 'material-ui/FlatButton';
import {Link}           from 'react-router';

const style = {
  margin: '10%',
  backgroundColor: '#800080',
  height: '40px',
  width: '80%',
  color: 'white'
};


const CommitButton = (props) => (
  <div>
    <FlatButton
      label={'SCHEDULE'}
      disabled={props.disabled}
      style={style}
      onTouchTap={props.onScheduleAmbit} // create ambit using date, name etc from current state
    />
  </div>
);

export default CommitButton;
