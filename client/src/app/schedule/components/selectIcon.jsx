import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ActionFlightTakeoff  from 'material-ui/svg-icons/action/flight-takeoff';
import FontIcon from 'material-ui/FontIcon';

const selectFieldStyle = {
  width: '80%',
  marginLeft: '40px'
};

const iconStyles = {
  marginRight: 24,
};

export default class SelectFieldExampleNullable extends Component {
  state = {
    value: null
  };

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div style={selectFieldStyle}>
        <SelectField
          floatingLabelText="Select Icon"
          value={this.state.value}
          onChange={this.handleChange}
        >
          <MenuItem 
          value={<div><ActionFlightTakeoff style={iconStyles} /></div>} 
          leftIcon={<ActionFlightTakeoff style={iconStyles} />} 
          primaryText="Flight" 
          />

        </SelectField>
      </div>
    );
  }
}