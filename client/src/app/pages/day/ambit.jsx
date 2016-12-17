import React            from 'react';
import Checkbox         from 'material-ui/Checkbox';
import Paper            from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText}
                        from 'material-ui/Card';
import FlatButton       from 'material-ui/FlatButton';
import Snackbar         from 'material-ui/Snackbar';
import {Link}           from 'react-router';

const notCheckedStyle = {
  color: 'white', //TODO: not working colors... 
  rippleColor: 'green', 
  backgroundColor:'green',
  height: '40px',
  width: '90px',
};

const checkedStyle = {
  color: 'white',
  backgroundColor:'blue',
  height: '40px',
  width: '100px',
};

// Stats Button Style:
//const statsStyle = {
//  color: 'white',
//  backgroundColor:'#e8687c',
//  height: '40px',
//  width: '80px',
//};

// Stats Button:
//<FlatButton
//  label={<Link to='/display' style={linkStyle}>Stats</Link>}//send to the stats page of the ambit.
//  style={statsStyle}
///>

const ambitStyle = {
  color: 'white',
  backgroundColor:'purple',
  height: '40px',
  width: '100px',
};

const cardStyle = {
  margin: '10px',
  fontSize: '11px',
};

const linkStyle = {
  color:'white',
  textDecoration:'none',
  fontSize: '11px',
};


class Ambit extends React.Component {
  constructor(props) {
    super(props);
  }
  
  generateFreq() {
    var str = '';
    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var longdays = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    if (this.props.ambit) {
      var wkds = this.props.ambit.weekdays;
      if (wkds.indexOf(true) === -1)                              str += 'Never';
      else if (wkds.indexOf(false) === -1)                        str += 'Daily';
      else if (wkds[0] === true && wkds.indexOf(true, 1) === 6)   str += 'Weekends';
      else if (wkds.indexOf(true, wkds.indexOf(true) + 1) === -1) str += longdays[wkds.indexOf(true)];
      else wkds.forEach((e, i) => {
        if (e && wkds.indexOf(true, i + 1) !== -1) str += days[i] + ', ';
        else if (e) str += days[i];
      });
    }
    return str;
  }

  render () {
    return (
      <Card style={cardStyle}>
        <CardHeader
          title = {this.props.ambit.name}
          avatar = "http://www.19130fitness.com/wp-content/uploads/2015/07/crossfit-barbell.png"
          subtitle = {this.generateFreq()}
        />
        <CardActions>
          <FlatButton
            label= {
              <span style={linkStyle}>
                {this.props.ambit.checkedIn ? "Checked In":"Check In!"}
              </span>
            }
            onTouchTap={() => { 
              this.props.handleCheckinAmbit(this.props.ambit); 
              } 
            }
            disabled = {this.props.ambit.checkedIn}
            style={this.props.ambit.checkedIn ? checkedStyle : notCheckedStyle}
          />
          <FlatButton
            label={<Link to='/ambit' style={linkStyle}>View Ambit</Link>}//send to the stats page of the ambit.
            onTouchTap={this.props.handleViewAmbit.bind(null, this.props.ambit)}
            style={ambitStyle}
          />
        </CardActions>
      </Card>
    );
  }
};


Ambit.propTypes = {
  ambit: React.PropTypes.object.isRequired,
  handleCheckinAmbit: React.PropTypes.func.isRequired
};


export default Ambit;
