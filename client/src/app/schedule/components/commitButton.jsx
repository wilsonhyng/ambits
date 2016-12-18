import React            from 'react';
import FlatButton       from 'material-ui/FlatButton';
import {Link}           from 'react-router';

const style = {
  margin: '10%',
  backgroundColor: '#1fda9a',
  height: '40px',
  width: '80%',
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
