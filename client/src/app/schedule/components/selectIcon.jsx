import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';

const iconStyles = {
  marginRight: 24,
};

const selectIconStyle = {
  width = 80%,
  marginLeft = '40px'

}
var plane = <ActionFlightTakeoff style={iconStyles} />;

const icons = [<MenuItem value={plane} key={1}/>];

export default class SelectIcon extends Component {
  state = {
    value: plane,
  }

  handleChange = (event, index, value) => {
    this.setState({value: value});
  }

  render() {
    return (
      <SelectField
        style={selectIconStyle}
        value={this.state.value}
        onChange={this.handleChange}
        maxHeight={100}
        floatingLabelText= "Ambit Icon"
      >
        {icons}
      </SelectField>
    );
  }
}