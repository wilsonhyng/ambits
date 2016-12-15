import React                  from 'react';
import {Component}            from 'react';

import {GridList, GridTile}   from 'material-ui/GridList';
import FlatButton       from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader}  from 'material-ui/Card';

import AmbitMap                    from './ambit/ambitMap.jsx';
import AmbitDescription            from './ambit/ambitDescription.jsx';
import AmbitWeekdays               from './ambit/ambitWeekdays.jsx';

// Redux
import { connect }      from 'react-redux';
import { loadAmbits, updateAmbit, updateTitle }
                        from '../_actions/ambit-actions';


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
    this.state = {
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ]
    }
  }

  // When the component mounts, load fakeData
  componentDidMount() {
  }

  render() {
    this.props.dispatch(updateTitle(this.state.days[(new Date).getDay()]));
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
            <AmbitWeekdays ambit={this.props.ambit}/>
            <AmbitDescription ambit={this.props.ambit}/>
          </div>
          <AmbitMap ambit={this.props.ambit}/>
        </GridList>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  ambit: state.ambit
});

Ambit = connect(mapStateToProps)(Ambit);


export default Ambit;
