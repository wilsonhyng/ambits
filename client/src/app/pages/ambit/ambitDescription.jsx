import React            from 'react';
import {Component}      from 'react';
import * as Utils       from '../../utils/utils.js';

import FlatButton       from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader}
                        from 'material-ui/Card';
import FloatingActionButton from 'material-ui/FloatingActionButton';

import MapsDirectionsRun      from 'material-ui/svg-icons/maps/directions-run';
import MapsDirectionsBike     from 'material-ui/svg-icons/maps/directions-bike';
import PlacesFitnessCenter    from 'material-ui/svg-icons/places/fitness-center';
import PlacesBusinessCenter   from 'material-ui/svg-icons/places/business-center';
import ActionShoppingCart     from 'material-ui/svg-icons/action/shopping-cart';
import ActionAlarm            from 'material-ui/svg-icons/action/alarm';
import MapsDirectionsTransit  from 'material-ui/svg-icons/maps/directions-transit';

import {Link}           from 'react-router';

// styling for FlatButton
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
const deleteStyle = {
  color: 'white',
  backgroundColor:'red',
  height: '40px',
  width: '100px',
};

const editStyle = {
  color: 'white',
  backgroundColor:'orange',
  height: '40px',
  width: '100px',
};

const linkStyle = {
  color:'white',
  textDecoration:'none',
  fontSize: '11px',
};

// styling for CardStyle
const cardStyle = {
  margin: '0px',
  marginTop: 20
};

// icons
const IconList = {
  MapsDirectionsRun:    <MapsDirectionsRun />,
  MapsDirectionsBike:   <MapsDirectionsBike />,
  PlacesFitnessCenter:  <PlacesFitnessCenter />,
  PlacesBusinessCenter: <PlacesBusinessCenter />,
  ActionShoppingCart:   <ActionShoppingCart />,
  ActionAlarm:          <ActionAlarm />,
  MapsDirectionsTransit: <MapsDirectionsTransit />,
};


class AmbitDescription extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // convert data into more sensible format
    let date = Utils.convertDate(new Date(this.props.ambit.startDate));
    let time = Utils.convertTime(new Date(this.props.ambit.startTime));

    // get selectedIcon
    let selctedIcon = this.props.ambit.icon || 'ActionAlarm';
    let iconElement = IconList[selctedIcon];
    let avatar =  <FloatingActionButton
                    disabled={true}
                    mini={true}
                    children={iconElement}
                    backgroundColor={'#f2f2f2'}
                    zDepth={0} >
                  </FloatingActionButton>

    return(
      <div>
        <Card style={cardStyle}>
          <CardHeader
            title = {'Activity: ' + this.props.ambit.name}
            avatar = {avatar}
            subtitle = { date + ' ' + time }
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
              label={<Link to='/schedule' style={linkStyle}>Edit</Link>}

              style={editStyle}
            />

            <FlatButton
              label={<Link to='/day' style={linkStyle}>Delete</Link>}
              onTouchTap={this.props.handleDeleteAmbit.bind(null, this.props.ambit)}
              style={deleteStyle}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}


export default AmbitDescription;
