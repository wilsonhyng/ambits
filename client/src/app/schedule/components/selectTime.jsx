import React            from 'react';
import TimePicker       from 'material-ui/TimePicker';


const SelectTime = (props) => {

  const NewTimePicker = 
    <div>
      <TimePicker
        hintText="Select Ambit Time"
        autoOk={true}
        onChange={props.onSelectTime}
        style={{marginLeft: '40px'}}
      />
    </div> ;

  const EditTimePicker = 
      <div>
        <TimePicker
          hintText="Select Ambit Time"
          autoOk={true}
          onChange={props.onSelectTime}
          style={{marginLeft: '40px'}}
          defaultTime={props.startTime}
        />
      </div> ;

  if (props.startTime === null) {
    return NewTimePicker;
  } else {
    return EditTimePicker;
  }

}


export default SelectTime;
