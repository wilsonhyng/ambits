import React            from 'react';
import {Component}      from 'react';
import DropDownList     from './dropdown.jsx';
import CommitButton     from './commitButton.jsx';
import StartDate        from './startDate.jsx';
import SelectDays       from './selectDays.jsx';
import AmbitNameInput   from './ambitNameInput.jsx';
import SelectTime       from './selectTime.jsx';
import SelectFrequency  from './selectFrequency.jsx';
import * as Utils       from '../../utils/utils.js';
import {Coords}         from '../../map/map.jsx';
import SelectIcon       from './selectIcon.jsx';

// material-ui
import Divider          from 'material-ui/Divider';

// Redux
import { connect }      from 'react-redux';
import { updateTitle, isDisabled }  
                        from '../../_actions/ambit-actions';



class ScheduleContainer extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      name:       '',
      coords:     {
        latitude: Coords.latitude,
        longitude:Coords.longitude
      },
      // frequency:'',
      weekdays:   [false, false, false, false, false, false, false],
      startDate:  {},
      startTime:  {},
      checkIns:   [],
      icon:       '',
    };

    this.onSelectDays = {
      onSelectDaysInputSunday:    this.onSelectDaysInputSunday.bind(this),
      onSelectDaysInputMonday:    this.onSelectDaysInputMonday.bind(this),
      onSelectDaysInputTuesday:   this.onSelectDaysInputTuesday.bind(this),
      onSelectDaysInputWednesday: this.onSelectDaysInputWednesday.bind(this),
      onSelectDaysInputThursday:  this.onSelectDaysInputThursday.bind(this),
      onSelectDaysInputFriday:    this.onSelectDaysInputFriday.bind(this),
      onSelectDaysInputSaturday:  this.onSelectDaysInputSaturday.bind(this),
    };
  }
  
  componentDidMount() {
    this.props.dispatch(updateTitle('Schedule an Ambit'));
  }

  onNameInput(nameInput) {
    this.setState({
      name: nameInput.target.value
    }, () => (
      this.onChange()
    ));
  }

  onSelectIcon(icon) {
    this.setState({
      icon: icon
    }, () => (
      this.onChange()
    ));
  }

// Need to reformat date object to not include current time before passing into database
  onStartDateSet(event, date) {
    this.setState({
      startDate: date
    }, () => (
      this.onChange()
    ));
  }

// Need to reformat time object to not include current date before passing into database
  onSelectTime(event, time) {
    this.setState({
      startTime:time
    }, () => (
      this.onChange()
    ));
  }

  onChange() {
    var ambitState = this.state;

    var hasName = ambitState.name !== '';
    var selectDays = ambitState.weekdays.indexOf(true) >= 0;
    var selectStartDate = JSON.stringify(ambitState.startDate) !== '{}';
    var selectStartTime = JSON.stringify(ambitState.startTime) !== '{}';
    var hasIcon = ambitState.icon !== '';

    if (hasName && selectDays && selectStartDate && selectStartTime && hasIcon) {
      this.props.dispatch(isDisabled(false));
    } else {
      this.props.dispatch(isDisabled(true));
    }
  }

  onScheduleAmbit() {
    var ambitState = this.state;
    Utils.postAmbit(ambitState, function() {
      console.log('posted!');
    });
  }

  // onDropDownSelect(event, index, value) {
  //   this.setState({
  //     dropdownValue: value
  //   });
  //   console.log(this.state.dropdownValue)
  // }


// this function was meant to take in the day index and the checked boolean, however 'this' being bound in the SelectDays module is causing issues with accessing this.state.
//////////////////////////////////////////////////
    // onSelectDaysInput(day, event, checked) {

      // var currentState = this.state;
      // currentState.weekdays[day] = checked;
      // console.log(day, checked);
      // this.setState(currentState);
      // this.setState({
      //   startDate[day] = checked
      // })
      // ;
    // }
    // // time to write some UGLY MFIN CODE.
//////////////////////////////////////////////////
//
//
// DONT JUDGE ME, IM PRESSED FOR TIME D;
//////////////////////////////////////////////////
  onSelectDaysInputSunday(event, checked) {
    var currentState = this.state;
    currentState.weekdays[0] = checked;
    this.setState(currentState, () => (
      this.onChange()
    ));
  }

  onSelectDaysInputMonday(event, checked) {
    var currentState = this.state;
    currentState.weekdays[1] = checked;
    this.setState(currentState, () => (
      this.onChange()
    ));
  }

  onSelectDaysInputTuesday(event, checked) {
    var currentState = this.state;
    currentState.weekdays[2] = checked;
    this.setState(currentState, () => (
      this.onChange()
    ));
  }

  onSelectDaysInputWednesday(event, checked) {
    var currentState = this.state;
    currentState.weekdays[3] = checked;
    this.setState(currentState, () => (
      this.onChange()
    ));
  }

  onSelectDaysInputThursday(event, checked) {
    var currentState = this.state;
    currentState.weekdays[4] = checked;
    this.setState(currentState, () => (
      this.onChange()
    ));
  }

  onSelectDaysInputFriday(event, checked) {
    var currentState = this.state;
    currentState.weekdays[5] = checked;
    this.setState(currentState, () => (
      this.onChange()
    ));
  }

  onSelectDaysInputSaturday(event, checked) {
    var currentState = this.state;
    currentState.weekdays[6] = checked;
    this.setState(currentState, () => (
      this.onChange()
    ));
  }

  //////////////////////////////////////////////////

  render() {
    return (
      <div>
        <div>
          <AmbitNameInput
            onNameInput={this.onNameInput.bind(this)}
            name={this.state.name}
          />
        </div>
        <div>
          <StartDate
            onStartDateSet={this.onStartDateSet.bind(this)}
            startDate={this.state.startDate}
          />
        </div>
        <div>
          <SelectTime 
            onSelectTime={this.onSelectTime.bind(this)}
          />
        </div>
        <div>
          <SelectIcon
            onSelectIcon={this.onSelectIcon.bind(this)}
            icon={this.state.icon}
          />
        </div>
        <div>
          <SelectDays
            onSelectDays={this.onSelectDays}
            weekdays={this.state.weekdays}
          />
        </div>
        <div>
          <CommitButton
            currentState ={this.state}
            onScheduleAmbit ={this.onScheduleAmbit.bind(this)}
            disabled={this.props.disabled}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  disabled: state.disabled
});

ScheduleContainer = connect(mapStateToProps)(ScheduleContainer);


export default ScheduleContainer;
