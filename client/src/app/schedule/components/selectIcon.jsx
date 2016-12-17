import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// material-ui icons
import MapsDirectionsRun from 'material-ui/svg-icons/maps/directions-run';
import MapsDirectionsBike from 'material-ui/svg-icons/maps/directions-bike';
import PlacesFitnessCenter from 'material-ui/svg-icons/places/fitness-center';
import PlacesBusinessCenter from 'material-ui/svg-icons/places/business-center';

const selectFieldStyle = {
  width: '80%',
  marginLeft: '40px'
};

const iconStyle = {
  marginTop: '15px',
  marginLeft: '1em',
  marginRight: '1em'
};

const textStyle = {
  // marginTop: '1em'
};

export default class SelectFieldExampleNullable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
      floatingText: 'Select Icon'
    };
  }

  handleChange (event, index, value) {
    this.setState({
      value: value,
      floatingText: ''
    }); 
    console.log (value);
    this.props.onSelectIcon(value);
  }

  render() {
    return (
      <div style={selectFieldStyle}>
        <SelectField
          floatingLabelText={this.state.floatingText}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          <MenuItem 
            value='MapsDirectionsRun'
            primaryText={<span>
              <MapsDirectionsRun style={iconStyle} />
              <span style={textStyle}>Run</span>
            </span> }
          />
          <MenuItem 
            value='MapsDirectionsBike' 
            primaryText={<span>
              <MapsDirectionsBike style={iconStyle} />
              <span style={textStyle}>Bike</span>
            </span>}
          />
          <MenuItem 
            value='PlacesFitnessCenter' 
            primaryText={<span>
              <PlacesFitnessCenter style={iconStyle} />
              <span style={textStyle}>Gym</span>
            </span>}
          />
          <MenuItem 
            value='PlacesBusinessCenter' 
            primaryText={<span>
              <PlacesBusinessCenter style={iconStyle} />
              <span style={textStyle}>Work</span>
            </span>}
          />
        </SelectField>
      </div>
    );
  }
}