import React            from 'react';
import {Component}      from 'react';

import AmbitWeekdays    from './ambitWeekdays.jsx'

class Ambit extends Component {
  constructor(props) {
    super(props);
    console.log(AmbitWeekdays);
  }
  
  render() {
    return (

      <div>
        <AmbitWeekdays />
      </div>


      )
  }
}


export default Ambit;
