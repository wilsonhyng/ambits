import React            from 'react';
import FlatButton       from 'material-ui/FlatButton';
import {Link}           from 'react-router';

const style = {
  margin: '10%',
  backgroundColor: 'blue',
  height: '40px',
  width: '80%',
};

const linkStyle = {
  color:'white',
  textDecoration:'none',
  fontSize: '12px',
};

const CommitButton = (props) => (
  <div>
    <FlatButton
      label={<Link to='/day' style={linkStyle}>SCHEDULE</Link>}
      style={style}
      onTouchTap= {props.onScheduleAmbit} // create ambit using date, name etc from current state
    />
  </div>
);


export default CommitButton;
