import React            from 'react';
import {Component}      from 'react';

//material-ui
import FloatingActionButton from 'material-ui/FloatingActionButton';

const Ambit = (props) => {
  console.log (props.ambit.name);
  return (
    <FloatingActionButton
      mini={true}
      backgroundColor='white' 
      children={props.ambit.name}
      /*onTouchTap={test}*/
    >  
    </FloatingActionButton>
  );
}


export default Ambit;