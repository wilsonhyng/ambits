import React                  from 'react';
import {Component}            from 'react';

import {GridList, GridTile}   from 'material-ui/GridList';
import FlatButton       from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader}  from 'material-ui/Card';

import AmbitMap                    from './ambitMap.jsx';
import AmbitDescription            from './ambitDescription.jsx';
import AmbitWeekdays               from './ambitWeekdays.jsx';

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

class Ambit extends Component {
  constructor(props) {
    super(props);
  }

  // When the component mounts, load fakeData
  componentDidMount() {
  }

  render() {
    // ** assume that ambitData is passed down via mapStateToProps **
    const ambitData = fakeAmbitData;

    // styling for Grids
    const styles = {
      gridList: {
        // height: 250,
        overflowY: 'auto',
        margin: '10px'
      },
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
        <GridList
            cols={1} cellHeight={250} padding={5} style={styles.gridList} >
          <div>
            <AmbitWeekdays/>
            <AmbitDescription/>
          </div>
          <AmbitMap coords={coords}/>
        </GridList>
      </div>

    );
  }
}


export default Ambit;
