import React              from 'react';
import { Component }      from 'react';
import WeekList           from './weekList.jsx';
import { getAllAmbits }   from '../../utils/utils'

import Paper from 'material-ui/Paper';

const style = {
  height: 100,
  width: 100,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

<Paper style={style} zDepth={2}></Paper>

class Week extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: new Date().getDay(),
      ambits: [], 
      days: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
      sortedAmbits: []
    }
  }

  componentDidMount() {
    getAllAmbits((data, error) => {
      if(error) {
        throw error;
      } else {       
        this.setState({ambits: data});
      }
    });
    this.sortAmbitsByDay(this.state.ambits);
  }

  // sortAmbitsByDay (ambits) {
  //   ambits.forEach((ambit) => {
  //     var days = ambit.weekdays;
  //     var ambitsByDay;
  //     days.forEach((day) => {
  //       ambitsByDay = this.state.sortedAmbits[day] || [];
  //       ambitsByDay.push(ambit);
  //     });
  //     this.state.sortedAmbits.push(ambitsByDay);
  //     this.setState({sortedAmbits: this.state.sortedAmbits});
  //   });
  // }

  //clickHandler here for clicks on the Day component

  //clickHandler here for clicks on the Ambit component

  render() {
    console.log(this.state.ambits);
    var counter = 0;
    var dayOfTheWeek = this.state.today;
    var sortedDays = [];
    var sortedAmbitsByDay = [];
    while (counter < 7) {
      sortedDays.push(this.state.days[dayOfTheWeek]);
      sortedAmbitsByDay.push(this.state.sortedAmbits[dayOfTheWeek] || []);
      dayOfTheWeek === 6 ? dayOfTheWeek = 0 : dayOfTheWeek ++;
      counter ++;
    }

    return (
      
      <div>
        <WeekList days={sortedDays} ambits={sortedAmbitsByDay} />
      </div>
    );
  }
}

export default Week;
