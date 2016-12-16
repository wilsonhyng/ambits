import React                  from 'react';
import {Component}            from 'react';

import FlatButton       from 'material-ui/FlatButton';
import Snackbar         from 'material-ui/Snackbar';
import {Card, CardActions, CardHeader}  from 'material-ui/Card';

const notCheckedStyle = {
  color: 'white', //TODO: not working colors... 
  rippleColor: 'green', 
  backgroundColor:'green'
};

const checkedStyle = {
  color: 'white',
  backgroundColor:'blue'
};

class AmbitDescription extends Component {
  constructor(props) {
    super(props);
  }

  // When the component mounts, do something....
  componentDidMount() {
  }

  render() {

    // styling for CardStyle
    const cardStyle = {
      margin: '0px',
      marginTop: 20
    };

    return(
      <div>
        <Card style={cardStyle}>
          <CardHeader
            title = {'Activity: ' + this.props.ambit.name}
            avatar = "http://www.19130fitness.com/wp-content/uploads/2015/07/crossfit-barbell.png"
            subtitle = {'Start Date: ' + this.props.ambit.startDate}
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
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default AmbitDescription;
