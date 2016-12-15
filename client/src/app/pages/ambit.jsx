import React                  from 'react';
import {Component}            from 'react';

import {GridList, GridTile}   from 'material-ui/GridList';
import FlatButton       from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader}  from 'material-ui/Card';

import AmbitMap                    from './ambit/ambitMap.jsx';
import AmbitDescription            from './ambit/ambitDescription.jsx';
import AmbitWeekdays               from './ambit/ambitWeekdays.jsx';

// Redux
import { connect }      from 'react-redux';
import { loadAmbits, updateAmbit, updateTitle }
                        from '../_actions/ambit-actions';

class Ambit extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(updateTitle(this.props.ambit.name));
  }

  render() {

    // styling for Grids
    const styles = {
      gridList: {
        overflowY: 'auto',
        margin: '10px'
      },
    };

    return(
      <div>
        <GridList
            cols={1} cellHeight={250} padding={5} style={styles.gridList} >
          <div>
            <AmbitWeekdays ambit={this.props.ambit}/>
            <AmbitDescription ambit={this.props.ambit}/>
          </div>
          <AmbitMap ambit={this.props.ambit}/>
        </GridList>
      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  ambit: state.ambit
});

Ambit = connect(mapStateToProps)(Ambit);

export default Ambit;
