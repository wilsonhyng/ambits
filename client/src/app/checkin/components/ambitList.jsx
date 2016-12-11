import React from 'react';
import Ambit from './ambit.jsx';

const AmbitList = (props) => {
  return (<div className='ambitList'> 
  {
    props.ambits.map(item => 
      (<Ambit ambit={item} handleCheckinAmbit={props.handleCheckinAmbit}/>))
  }
  </div>);
}

AmbitList.propTypes = {
  ambits: React.PropTypes.array.isRequired,
  handleCheckinAmbit: React.PropTypes.func.isRequired
};

// const AmbitList = ()=> (<h2>testing</h2>);
export default AmbitList;  


