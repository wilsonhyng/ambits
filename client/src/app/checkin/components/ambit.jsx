import React from 'react';
import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';


const checkinStyle = {
  color: 'white',
  backgroundColor:'red',
  hoverColor:'green', //TODO: not working colors... 
  rippleColor: 'green' 
};

const statsStyle = {
  color: 'white',
  backgroundColor:'red',
};


class Ambit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }

  render () {
    return (
      <Card>
        <CardHeader
          title = {this.props.ambit.name}
          avatar = "http://www.19130fitness.com/wp-content/uploads/2015/07/crossfit-barbell.png"
          subtitle = {this.props.ambit.frequency}
        />
        <CardActions>
          <FlatButton
            label= {
              this.state.checked ? "You Rock!":"Check In!"
            }
            onTouchTap={() => { 
              this.setState({checked:true}); //TODO: Only when the checkin is successful.
              this.props.handleCheckinAmbit(this.props.ambit); //TODO: while checking in start spinner.
              } //TODO: failed checkin -> feedback through the snackbar. / successful checkin --> feedback through the snackbar.
            }
            style={checkinStyle}
          />
          <FlatButton
            label="Stats" //send to the stats page of the ambit.
            style={statsStyle}
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












