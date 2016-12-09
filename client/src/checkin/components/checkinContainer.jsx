import React from 'react';
import Utils from '../../utils/utils.js';

class CheckinContainer extends React.Component {
  constructor() {
    super(props); 
    this.state = {
      ambitList: {gym: {
        ambitName: 'Gym',
        location: {
          latitude: '37.98',
          longitude: '37.20'
        },
        checkedIn: false,
      }}
    }; 
  },
  handleCreateAmbit() {

  },
  handleCheckinAmbit(ambit) {
    Utils.checkinAmbit(ambit);
  },
  handleShowStats(){},

  render() {
    return (
    <div>
      <AmbitList ambitList = {this.state.ambitList} />
      <Controls/>
    </div>
    );
  }
}

export {CheckinContainer}