import React            from 'react';
import {Component}      from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';

const divStyle = {
  textAlign: 'center'
};

const btnText = {
  fontSize: '20px',
  color: 'white'
}

const styleSpacing = {
  marginTop: 12,
  marginRight: 10
};

class AmbitWeekdays extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'],
    }
  }

  render() {
    return (
      <div style={divStyle}>
        {
          this.state.days.map((day, index) => 
            <FloatingActionButton
              backgroundColor={'purple'}
              mini={true}
              children={day}
              disabled={this.props.ambit.weekdays[index]}
              iconStyle={btnText}
              style={styleSpacing}
            >
            </FloatingActionButton>
        )}
      </div>
      )
  }
}

export default AmbitWeekdays;