import React from 'react';
import * as Utils from '../../utils/utils.js';
import AmbitList from './ambitList.jsx';


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
      }]
    };
    this.handleCheckinAmbit = this.handleCheckinAmbit.bind(this); 
  }

  handleCreateAmbit() {}

  getAmbits() {
    Utils.getAllAmbits((data) => {
      this.setState({
        ambits: JSON.parse(data)
      });
    });
  }

  handleCheckinAmbit(ambit) {
    Utils.checkinAmbit(ambit, () => {
      this.state.ambits.find(item => ambit.name === item.name).checkedIn = true;
      this.setState({
        ambits: this.state.ambits
      });
    });
  }

  handleShowStats(){}

  render() {
    return (
      <div >
        <AmbitList ambits={this.state.ambits} 
        handleCheckinAmbit={this.handleCheckinAmbit}/>
      </div>
    );
  }
};

