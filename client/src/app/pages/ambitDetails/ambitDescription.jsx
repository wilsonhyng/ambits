import React                  from 'react';
import {Component}            from 'react';

import FlatButton       from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader}  from 'material-ui/Card';

// -------------------- FakeData -------------------
const fakeAmbitData = {
  refId: 1234,
  name: 'Gym',
  coords: {
    latitude: 37.784,
    longitude: -122.40903
  },
  weekdays:[true,true,true,true,true,true,true],
  startDate:'2016-12-12',
  checkIns:[]
}
// -----------------------------------------------


class AmbitDescription extends Component {
  constructor(props) {
    super(props);
  }

  // When the component mounts, load fakeData
  componentDidMount() {
  }

  render() {
    // ** assume that ambitData is passed down via mapStateToProps **
    const ambitData = fakeAmbitData;

    // styling for CardStyle
    const cardStyle = {
      margin: '0px',
      marginTop: 20
    };

    // prepare varialbe to display Description
    let refId = ambitData.refId;
    let name = ambitData.name;
    let coords = ambitData.coords;
    let weekdays = ambitData.weekdays;
    let startDate = ambitData.startDate;
    let checkIns = ambitData.checkIns;

    return(
      <div>
        <Card style={cardStyle}>
          <CardHeader
            title = {'Activity: ' + name}
            avatar = "http://www.19130fitness.com/wp-content/uploads/2015/07/crossfit-barbell.png"
            subtitle = {'Start Date: ' + startDate}
          />
          <CardActions>
            <FlatButton
              label= {'checkin'}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}


export default AmbitDescription;
