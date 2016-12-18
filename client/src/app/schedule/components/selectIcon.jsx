import React, {Component} from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// material-ui icons
import MapsDirectionsRun      from 'material-ui/svg-icons/maps/directions-run';
import MapsDirectionsBike     from 'material-ui/svg-icons/maps/directions-bike';
import PlacesFitnessCenter    from 'material-ui/svg-icons/places/fitness-center';
import PlacesBusinessCenter   from 'material-ui/svg-icons/places/business-center';
import ActionShoppingCart     from 'material-ui/svg-icons/action/shopping-cart';
import ActionAlarm            from 'material-ui/svg-icons/action/alarm';
import MapsDirectionsTransit  from 'material-ui/svg-icons/maps/directions-transit';


const selectFieldStyle = {
  width: '80%',
  marginTop: '0%',
  marginLeft: '40px'
};

const iconStyle = {
  marginTop: '15px',
  marginRight: '1em'
};

const textStyle = {
  // marginTop: '1em'
};

const icons = [];


export default class SelectFieldExampleNullable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.icon,
      floatingText: 'Select Icon'
    };
  }

  handleChange (event, index, value) {
    this.setState({
      value: value,
      floatingText: ''
    }); 
    this.props.onSelectIcon(value);
  }

  render() {
    return (
      <div>
        <SelectField
          floatingLabelText={this.state.floatingText}
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
          style={selectFieldStyle}

        >
          <MenuItem 
            value='ActionAlarm'
            primaryText={<span>
              <ActionAlarm style={iconStyle} />
              <span style={textStyle}>Default</span>
            </span> }
          />
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
          <MenuItem 
            value='ActionShoppingCart'
            primaryText={<span>
              <ActionShoppingCart style={iconStyle} />
              <span style={textStyle}>Shopping</span>
            </span>}
          />
          <MenuItem 
            value='MapsDirectionsTransit'
            primaryText={<span>
              <MapsDirectionsTransit style={iconStyle} />
              <span style={textStyle}>Transit</span>
            </span> }
          />
        </SelectField>
      </div>
    );
  }
}