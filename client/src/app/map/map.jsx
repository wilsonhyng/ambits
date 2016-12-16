import React              from 'react';
import {Component}        from 'react';
import loadGoogleMapsAPI
                          from 'load-google-maps-api';
import {Link}             from 'react-router';

import RaisedButton       from 'material-ui/RaisedButton';
import {deepOrange500}    from 'material-ui/styles/colors';
import getMuiTheme        from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider   from 'material-ui/styles/MuiThemeProvider';
// -------------------------------------------------------

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

const actionStyle = {
  color: 'white',
  backgroundColor:'purple',
  position: 'fixed',
  top: '80%',
  left: '50%',
  height:'50px',
  width:'240px',
  transform: 'translate(-50%, -50%)'
};

const linkStyle = {
  color:'white',
  'textDecoration':'none'
};

let Coords = {
  latitude: 0,
  longitude: 0
};

// load GoogleMap only once
window.loadedGoogleMaps = window.loadedGoogleMaps;

class Map extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

    if (window.loadedGoogleMaps === undefined) {
      // This is public; restricted by IP
      loadGoogleMapsAPI({
        key: "AIzaSyAHJfNJp8pbRxf_05L1TIm5ru-Dvcla-Nw",
        v: '3.25'
      }).then((googleMaps) => {
        window.loadedGoogleMaps = googleMaps;
        this.initMap(googleMaps);
      });
    } else {
        this.initMap(window.loadedGoogleMaps);
    }

  }

  initMap(googleMaps) {
    // hackReactor is assumed to the current position
    let hackReactor = { lat: 37.791066, lng: -122.3991683 }

    let map = new googleMaps.Map(document.getElementById('map'), {
      zoom: 17,
      center: hackReactor
    });
    this.map = map; // save to 'this.map' for getCoordinates method

    let marker = new googleMaps.Marker({
      position: hackReactor,
      map: map
    });

    googleMaps.event.addListener(map, 'drag', () => {
      let centerLatLng = map.getCenter();
      marker.setPosition(centerLatLng);
    });

  }

  getCoordinates() {
    Coords = {
      latitude: this.map.getCenter().lat(),
      longitude: this.map.getCenter().lng()
    };
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
      <div>
          <div id="map">
          </div>
          <RaisedButton
          onTouchTap={this.getCoordinates.bind(this)}
          label ={<Link to='/schedule' style ={linkStyle} >Schedule for this Location</Link> }
          buttonStyle={actionStyle}
          primary = {true}
          fullWidth={false}
          ></RaisedButton>
      </div>
      </MuiThemeProvider>
    )
  }
}

export { Coords }; //there is single-entry point to schedule and it is through maps.
export default Map;
