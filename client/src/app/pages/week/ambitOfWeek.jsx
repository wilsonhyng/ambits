import React            from 'react';
import {Component}      from 'react';

//material-ui
import FloatingActionButton from 'material-ui/FloatingActionButton';

import MapsDirectionsRun      from 'material-ui/svg-icons/maps/directions-run';
import MapsDirectionsBike     from 'material-ui/svg-icons/maps/directions-bike';
import PlacesFitnessCenter    from 'material-ui/svg-icons/places/fitness-center';
import PlacesBusinessCenter   from 'material-ui/svg-icons/places/business-center';
import ActionShoppingCart     from 'material-ui/svg-icons/action/shopping-cart';
import ActionAlarm            from 'material-ui/svg-icons/action/alarm';
import MapsDirectionsTransit  from 'material-ui/svg-icons/maps/directions-transit';


const btnStyle = {
  marginTop: 15,
  marginRight: 10,
};

const IconList = {
  MapsDirectionsRun:    <MapsDirectionsRun />,
  MapsDirectionsBike:   <MapsDirectionsBike />,
  PlacesFitnessCenter:  <PlacesFitnessCenter />,
  PlacesBusinessCenter: <PlacesBusinessCenter />,
  ActionShoppingCart:   <ActionShoppingCart />,
  ActionAlarm:          <ActionAlarm />,
  MapsDirectionsTransit: <MapsDirectionsTransit />,
};

const Ambit = (props) => {

  const selctedIcon = props.ambit.icon || 'ActionAlarm';
  let iconElement = IconList[selctedIcon];
  return (
     <FloatingActionButton
      disabled={true}
      mini={true}
      children={iconElement}
      style={btnStyle}
      zDepth={0} >
    </FloatingActionButton>
  );
}

export default Ambit;
