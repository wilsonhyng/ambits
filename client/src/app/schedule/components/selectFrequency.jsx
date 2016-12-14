import React            from 'react';
import {RadioButton, RadioButtonGroup}
                        from 'material-ui/RadioButton';

const styles = {
  block: {
    maxWidth: 250,
  },
  radioButton: {
    marginBottom: 16,
  },
};


const SelectFrequency = (props) => (
  <div>
    <RadioButtonGroup
      name="Frequency"
      defaultSelected="Daily"
      onChange= {props.onFrequencyChange}>
      <RadioButton
        value="Daily"
        label="Daily"
        style={styles.radioButton}
      />
      <RadioButton
        value="Weekdays"
        label="Weekdays"
        style={styles.radioButton}
      />
      <RadioButton
        value="Weekends"
        label="Weekends"
        style={styles.radioButton}
      />
    </RadioButtonGroup>
  </div>
);


export default SelectFrequency;
