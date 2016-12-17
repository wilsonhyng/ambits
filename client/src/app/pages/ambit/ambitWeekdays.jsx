import React            from 'react';
import {Component}      from 'react';

import injectTapEventPlugin
                        from 'react-tap-event-plugin';


import FloatingActionButton from 'material-ui/FloatingActionButton';

class AmbitWeekdays extends Component {
  constructor(props) {
    super(props);
  }

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
      // var ambitState = this.state; //state of current ambit

      // create utils function
      // Utils.changeAmbitDay(ambitState, () => {
      //   console.log('Changed Ambit Day')
      // });
    }

    function dayOnOff() {

    }

    return (
      <div style={divStyle}>

        <FloatingActionButton mini={true} disabled={!this.props.ambit.weekdays[0]}style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>Su</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.props.ambit.weekdays[1]} style={style} backgroundColor='purple' onTouchTap={changeAmbitDay}>
          <div style={h1Style}>
            <h1>M</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.props.ambit.weekdays[2]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>Tu</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.props.ambit.weekdays[3]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>W</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.props.ambit.weekdays[4]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>Th</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.props.ambit.weekdays[5]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>F</h1>
          </div>
        </FloatingActionButton>

        <FloatingActionButton mini={true} disabled={!this.props.ambit.weekdays[6]} style={style} backgroundColor='purple' onTouchTap={test}>
          <div style={h1Style}>
            <h1>Sa</h1>
          </div>
        </FloatingActionButton>

      </div>
      )
  }
}

export default AmbitWeekdays;
