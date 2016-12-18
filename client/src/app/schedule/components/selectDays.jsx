import React, {Component}     from 'react';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  block: {
    maxWidth: 250,
  },
  checkbox: {
    marginTop:  '16px',
    marginLeft: '45px'
  },
};

const SelectDays = (props) => (
  <div style={styles.block}>
    <Checkbox
      label="Sunday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputSunday}
      checked={props.weekdays[0]}
    />

    <Checkbox
      label="Monday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputMonday}
      checked={props.weekdays[1]}
    />

    <Checkbox
      label="Tuesday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputTuesday}
      checked={props.weekdays[2]}
    />

    <Checkbox
      label="Wednesday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputWednesday}
      checked={props.weekdays[3]}
    />

    <Checkbox
      label="Thursday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputThursday}
      checked={props.weekdays[4]}
    />

    <Checkbox
      label="Friday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputFriday}
      checked={props.weekdays[5]}
    />

    <Checkbox
      label="Saturday"
      style={styles.checkbox}
      onCheck={props.onSelectDays.onSelectDaysInputSaturday}
      checked={props.weekdays[6]}
    />

  </div>
);


export default SelectDays;