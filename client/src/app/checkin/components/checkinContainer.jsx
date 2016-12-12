import React from 'react';
import * as Utils from '../../utils/utils.js';
import AmbitList from './ambitList.jsx';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from'material-ui/CircularProgress';
import Snackbar from 'material-ui/Snackbar';


//styling
const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const spinnerStyle  = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
};

const userFeedback = {
  default: '',
  cheat:'Not at the Location',
  geoNotFount: 'Geolocation feature is not enabled',
  successfulCheckin: 'Check in successful',
  checkInternetConnection:'Cannot fetch ambits:( Check internet connection'  
};


export default class CheckinContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ambits: [],
      loading: false,
      feedback: {
        open: false,
        autoHideDuration: 3000,
        message: userFeedback.default
      }
    };
    this.handleCheckinAmbit = this.handleCheckinAmbit.bind(this);
  }
  componentDidMount() {
    Utils.getAllAmbits((data, error) => {
      if(error) {
        //send user feedback: no connection
      } else {       
        this.setState({ambits: data});
      }
    });
  }

  handleCreateAmbit(event) {

    event.preventDefault();
  }

  getAmbits() {
    Utils.getAllAmbits((data) => {
      this.setState({
        ambits: data
      });
    });
  }

  handleCheckinAmbit(ambit) {
    this.setState({loading: true}); //loading...
    //validate checkin:
    Utils.checkinAmbit(ambit, () => {
      //if valid update the state
      this.state.ambits.find(item => ambit.name === item.name).checkedIn = true;
      this.setState({
        loading:false,
        ambits: this.state.ambits,
        feedback: {open: true, message: userFeedback.successfulCheckin}
      });
      //update the database
      Utils.postCheckin(ambit.refId, () => {
        console.log('delivered');
      });
    }, ()=>{
      //you can't cheat message:
      this.setState({loading:false, feedback: { open: true, message:userFeedback.cheat}});
    });
  }

  handleShowStats(){}

  render() {
    if(!this.state.loading) {
      return (
        <MuiThemeProvider muiTheme={muiTheme}>
          <div>
            <AmbitList ambits={this.state.ambits} 
            handleCheckinAmbit={this.handleCheckinAmbit}/>
            <Snackbar
            open={this.state.feedback.open}
            message={this.state.feedback.message}
            autoHideDuration={this.state.feedback.autoHideDuration}
            />
          </div>
        </MuiThemeProvider>
      );
    } else {
      return (
        <div>
          <CircularProgress size={60} thickness={7} style={spinnerStyle}/>
        </div>
        );
    }
  }
};
