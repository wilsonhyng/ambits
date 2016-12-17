import React            from 'react';
import {Component}      from 'react';

//material-ui
import FloatingActionButton from 'material-ui/FloatingActionButton';

import MapsDirectionsBike     from 'material-ui/svg-icons/maps/directions-bike';
import MapsDirectionsRun      from 'material-ui/svg-icons/maps/directions-run';
import PlacesFitnessCenter    from 'material-ui/svg-icons/places/fitness-center';
import PlacesBusinessCenter   from 'material-ui/svg-icons/places/business-center';

const btnStyle = {
  marginTop: 5,
  marginRight: 1,
};


const IconList = {
  MapsDirectionsBike: <MapsDirectionsBike />,
  MapsDirectionsRun: <MapsDirectionsRun />,
  PlacesFitnessCenter: <PlacesFitnessCenter />,
  PlacesBusinessCenter: <PlacesBusinessCenter />,
};

const Ambit = (props) => {
  const selctedIcon = props.ambit.icon || 'MapsDirectionsBike';
  let iconElement = IconList[selctedIcon];
  return (
     <FloatingActionButton
      disabled={true}
      children={iconElement}
      style={btnStyle}
      zDepth={0} >
    </FloatingActionButton>
  );
}

export default Ambit;
