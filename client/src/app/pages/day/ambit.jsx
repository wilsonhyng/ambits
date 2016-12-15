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
  fontSize: 30%,
};

const checkedStyle = {
  color: 'white',
  backgroundColor:'blue',
  fontSize: 30%,
};

const statsStyle = {
  color: 'white',
  backgroundColor:'red',
  fontSize: 30%,
};

const ambitStyle = {
  color: 'white',
  backgroundColor:'blue',
  fontSize: 30%,
};

const cardStyle = {
  margin: '10px',
  fontSize: 30%,
};

const linkStyle = {
  color:'white',
  textDecoration:'none',
  fontSize: 30%,
};


class Ambit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render () {
    return (
      <Card style={cardStyle}>
        <CardHeader
          title = {this.props.ambit.name}
          avatar = "http://www.19130fitness.com/wp-content/uploads/2015/07/crossfit-barbell.png"
          subtitle = {this.props.ambit.frequency}
        />
        <CardActions>
          <FlatButton
            label= {
              this.props.ambit.checkedIn ? "Checked In":"Check In!"
            }
            onTouchTap={() => { 
              this.props.handleCheckinAmbit(this.props.ambit); 
              } 
            }
            disabled = {this.props.ambit.checkedIn}
            style={this.props.ambit.checkedIn ? checkedStyle : notCheckedStyle}
          />
          <FlatButton
            label={<Link to='/display' style={linkStyle}>Stats</Link>}//send to the stats page of the ambit.
            style={statsStyle}
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
