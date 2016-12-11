import React from 'react';
const Ambit = (props) => {
  return (
    <div>
      <h3>{props.ambit.name}</h3>
      <h3>{props.ambit.checkedIn.toString()}</h3>
      <button onClick={() => props.handleCheckinAmbit(props.ambit)}>Send Location</button>
    </div>
  );
};

Ambit.propTypes = {
  ambit: React.PropTypes.object.isRequired,
  handleCheckinAmbit: React.PropTypes.func.isRequired
};

export default Ambit;


