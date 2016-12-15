import React from 'react';
import Ambit from './ambit.jsx';


const AmbitList = (props) => {
  return (<div className='ambitList'> 
  {
    props.ambits.map((item, index) => 
      (<Ambit ambit={item} handleCheckinAmbit={props.handleCheckinAmbit} key={index}/>))
  }
  </div>);
}


AmbitList.propTypes = {
  ambits: React.PropTypes.array.isRequired,
  handleCheckinAmbit: React.PropTypes.func.isRequired
};


export default AmbitList;  
