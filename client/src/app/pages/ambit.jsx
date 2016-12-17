import React            from 'react';
import {Component}      from 'react';
import * as Utils       from '../utils/utils.js';

import {GridList, GridTile}
                        from 'material-ui/GridList';
import FlatButton       from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader}
                        from 'material-ui/Card';
import CircularProgress from 'material-ui/CircularProgress';
import Snackbar         from 'material-ui/Snackbar';

import AmbitMap         from './ambit/ambitMap.jsx';
import AmbitDescription from './ambit/ambitDescription.jsx';
import AmbitWeekdays    from './ambit/ambitWeekdays.jsx';

// Redux
import { connect }      from 'react-redux';
import { loadAmbits, updateAmbit, updateTitle, deleteAmbit, updateCurBit }
                        from '../_actions/ambit-actions';

const userFeedback = {
  default: '',
  cheat:'Not at the Location',
  geoNotFount: 'Geolocation feature is not enabled',
  successfulCheckin: 'Check in successful',
  checkInternetConnection:'Cannot fetch ambits:( Check internet connection )'
};

// styling for Grids
const styles = {
  gridList: {
    overflowY: 'auto',
    margin: '10px'
  },
};

const spinnerStyle  = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};


class Ambit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      feedback: {
      open: false,
      autoHideDuration: 3000,
      message: userFeedback.default
      }
    }
    this.handleCheckinAmbit = this.handleCheckinAmbit.bind(this);
  }

  componentDidMount() {
    this.props.dispatch(updateTitle(this.props.ambit.name));
  }

  handleCheckinAmbit(ambit) {
    this.setState({loading: true}); //loading...
    //validate checkin:
    Utils.checkinAmbit(ambit, () => {
      //if valid update the state
      ambit.checkedIn = true;
      this.props.dispatch(updateAmbit(ambit));
      this.setState({
        loading:  false,
        feedback: {open: true, message: userFeedback.successfulCheckin}
      });
      //update the database
      Utils.postCheckin(ambit.refId, () => {
        console.log('delivered');
      });
    }, ()=>{
      //you can't cheat message:
      this.setState({
        loading: false,
        feedback: {
          open: true,
          message:userFeedback.cheat
        }
      });
    });
  }
  
  handleDeleteAmbit(ambit) {
    //delete ambit:
    Utils.deleteAmbit(ambit.refId, () => {
      //if deleted update the state
      this.props.dispatch(deleteAmbit(ambit));
      this.props.dispatch(updateCurBit(null));
    });
  }

  render() {
    if(!this.state.loading) {
      return(
        <div>
          <GridList
            cols={1} cellHeight={250} padding={5} style={styles.gridList}
          >
            <div>
              <AmbitWeekdays
                ambit={this.props.ambit}
              />

              <AmbitDescription
                ambit={this.props.ambit}
                handleCheckinAmbit={this.handleCheckinAmbit}
                handleDeleteAmbit={this.handleDeleteAmbit.bind(this)}
              />
            </div>

            <AmbitMap
              ambit={this.props.ambit}
            />
          </GridList>

          <Snackbar
            open={this.state.feedback.open}
            message={this.state.feedback.message}
            autoHideDuration={this.state.feedback.autoHideDuration}
            bodyStyle={{ backgroundColor: 'teal', color: 'coral' }}
            
          />
        </div>
      );
    } else {
      return (
        <div>
          <CircularProgress size={60} thickness={7} style={spinnerStyle}/>
        </div>
      );
    }
  }
}


const mapStateToProps = (state) => ({
  ambit: state.ambit
});

Ambit = connect(mapStateToProps)(Ambit);


export default Ambit;
