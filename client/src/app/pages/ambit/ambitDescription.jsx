import React                  from 'react';
import {Component}            from 'react';

import FlatButton       from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader}  from 'material-ui/Card';

class AmbitDescription extends Component {
  constructor(props) {
    super(props);
  }

  // When the component mounts, do something....
  componentDidMount() {
  }

  render() {

    // styling for CardStyle
    const cardStyle = {
      margin: '0px',
      marginTop: 20
    };

    return(
      <div>
        <Card style={cardStyle}>
          <CardHeader
            title = {'Activity: ' + this.props.ambit.name}
            avatar = "http://www.19130fitness.com/wp-content/uploads/2015/07/crossfit-barbell.png"
            subtitle = {'Start Date: ' + this.props.ambit.startDate}
          />
          <CardActions>
            <FlatButton
              label= {'checkin'}
            />
          </CardActions>
        </Card>
      </div>
    );
  }
}


export default AmbitDescription;
