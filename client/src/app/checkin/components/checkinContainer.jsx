import React from 'react';
import * as Utils from '../../utils/utils.js';
import AmbitList from './ambitList.jsx';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from'material-ui/CircularProgress';

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

export default class CheckinContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ambits: [{
        name: 'Gym',
        location: {
          latitude: '37.780',
          longitude: '-122.406'
        },
        checkedIn: false,
        frequency: "Daily"
      }],
      loading: false
    };
    this.handleCheckinAmbit = this.handleCheckinAmbit.bind(this);
  }

  handleCreateAmbit(event) {

    event.preventDefault();
  }

  getAmbits() {
    Utils.getAllAmbits((data) => {
      this.setState({
        ambits: JSON.parse(data)
      });
    });
  }

  handleCheckinAmbit(ambit) {
    this.setState({loading: true}); //loading...
    Utils.checkinAmbit(ambit, () => {
      this.state.ambits.find(item => ambit.name === item.name).checkedIn = true;
      this.setState({
        loading:false,
        ambits: this.state.ambits
      });
    }, ()=>{
      this.setState({loading:false});
      //you can't cheat messages
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
