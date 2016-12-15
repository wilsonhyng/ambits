import React            from 'react';
import {Component}      from 'react';

import injectTapEventPlugin
                        from 'react-tap-event-plugin';


import FloatingActionButton from 'material-ui/FloatingActionButton';

const fakeAmbit = {
        refId: 1234,
        name: 'Gym',
        coords: {
          latitude: 37.784,
          longitude: -122.40903
        },
        weekdays:[true,true,false,true,true,false,false],
        startDate:'2016-12-12',
        checkIns:[]
      };



class AmbitWeekdays extends Component {
  constructor(props) {
    super(props);
    this.state ={
      checkIns: this.props.ambit.checkIns,
      coords: this.props.ambit.coords,
      name:  this.props.ambit.name,
      refId:  this.props.ambit.refId,
      startDate: this.props.ambit.startDate,
      weekdays:  this.props.ambit.weekdays, 
    }
  }

  // getInitialState: function() {
  //  return {
  //   checkIns: this.props.ambit.checkIns,
  //   coords: this.props.ambit.coords,
  //   name:  this.props.ambit.name,
  //   refId:  this.props.ambit.refId,
  //   startDate: this.props.ambit.startDate,
  //   weekdays:  this.props.ambit.weekdays, 
  //  }
  // }
  
  render() {

    const style = {
      marginTop: 12,
      marginRight: 10
    };

    const divStyle = {
      textAlign: 'center'
    };

    const h1Style = {
      margin: 0,
      top: 'auto',
      right: 8,
      bottom: 16,
      left: 'auto',
      position: 'fixed',
    }

    function test() {
      console.log('hello');
    }

    function changeAmbitDay() {
      var ambitState = this.state; //state of current ambit
      
      // create utils function
      // Utils.changeAmbitDay(ambitState, () => {
      //   console.log('Changed Ambit Day')
      // });      
    }

    function dayOnOff() {

    }

    return (
      <div style={divStyle}>

        <FloatingActionButton mini={true} disabled={!this.state.weekdays[0]}style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>M</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.state.weekdays[1]} style={style} backgroundColor='purple' onTouchTap={changeAmbitDay}>
          <div style={h1Style}>
            <h1>Tu</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.state.weekdays[2]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>W</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.state.weekdays[3]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>Th</h1>
          </div>
        </FloatingActionButton>
   
        <FloatingActionButton mini={true} disabled={!this.state.weekdays[4]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>F</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.state.weekdays[5]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>Sa</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.state.weekdays[6]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>Su</h1>
          </div>
        </FloatingActionButton>

      </div>
      )
  }
}



export default AmbitWeekdays;
