import React              from 'react';
import { Component }      from 'react';
import WeekList           from './week/weekList.jsx';
import { getAllAmbits }   from '../utils/utils'

// Redux
import { connect }      from 'react-redux';
import { loadAmbits, updateTitle }
                        from '../_actions/ambit-actions';

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
        this.props.dispatch(loadAmbits(data));
        // this.setState({ambits: data});
      }
    });
  }

  sortAmbitsByDay (ambits) {
    var sortedAmbits = [[], [], [], [], [], [], []];
    ambits.forEach(function(ambit) {
      var days = ambit.weekdays;
      days.forEach(function (hasAmbit, day) {
        if (hasAmbit) {
          sortedAmbits[day].push(ambit.name);
        }
      });
    });
    return sortedAmbits;
  }

  //clickHandler here for clicks on the Day component

  //clickHandler here for clicks on the Ambit component

  render() {
    var counter = 0;
    var dayOfTheWeek = this.state.today;
    var sortedDays = [];
    var sortedAmbitsByDay = [];
    var sortedAmbits = this.sortAmbitsByDay(this.props.ambits);

    while (counter < 7) {
      sortedDays.push(this.state.days[dayOfTheWeek]);
      sortedAmbitsByDay.push(sortedAmbits[dayOfTheWeek]);
      dayOfTheWeek === 6 ? dayOfTheWeek = 0 : dayOfTheWeek ++;
      counter ++;
    }
    console.log ('UNSORTED AMBITS', this.props.ambits);
    console.log ('SORTED AMBITS', sortedAmbitsByDay);
    console.log ('AMBITS PASSED TO WEEKLIST', sortedAmbits);
    return (    
      <div>
        <WeekList days={sortedDays} ambits={sortedAmbitsByDay} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ambits: state.ambits
});

Week = connect(mapStateToProps)(Week);

export default Week;
