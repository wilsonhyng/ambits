import React              from 'react';
import {Component}        from 'react';
import loadGoogleMapsAPI  from 'load-google-maps-api';

var Coords = {
  latitude: 0,
  longitude: 0
};

class AmbitMap extends Component {
  constructor(props) {
    super(props);

    this.mapInstance = {};
    this.googleMaps = {};
    this.centerMarker = {};
  }

  // When the component mounts, initialze the map
  componentDidMount() {
    loadGoogleMapsAPI({
      // This is public; restricted by IP
      key: "AIzaSyAHJfNJp8pbRxf_05L1TIm5ru-Dvcla-Nw",
      v: '3.25'
    })
    .then((googleMaps) => {
      // initializeMap
      this.initMap(googleMaps);

      let map = this.mapInstance;

      googleMaps.event.addListener(map, 'drag', () => {
        let centerLatLng = map.getCenter();
        this.centerMarker.setPosition(centerLatLng);
      });

    });
  }

  // initialize the map with a marker at ambitLocation
  initMap(googleMaps) {

    let ambitLocation = {
      lat: this.props.coords.latitude,
      lng: this.props.coords.longitude
    }

    let map = new googleMaps.Map(document.getElementById('map'), {
      zoom: 17,
      center: ambitLocation,
      disableDefaultUI: true
    });

    let marker = new googleMaps.Marker({
      position: ambitLocation,
      map: map
    });

    // showMyLocation (getting curr loc takes sometime)
    this.showMyLocation(googleMaps, map)

    // Awful, impure pattern, fix ?????
    this.mapInstance = map;
    this.centerMarker = marker;
    this.googleMaps = googleMaps;
  }

  // Use HTML5 geolocation to find the current location
  // getMyPosition Using Promise and place a blue dot on the map
  showMyLocation(googleMaps, map) {
    const getMyPosition = () => {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }

    getMyPosition()
      .then((position) => {

        // concert position to Google Map convention
        let currentLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        // place a blue dot on my current locaiton
        let marker2 = new googleMaps.Marker({
          position: currentLocation,
          map: map,
          icon: 'http://www.robotwoods.com/dev/misc/bluecircle.png'
        });
      })
      .catch((err) => {
        console.error(err.message);
      });
  }

  render() {
    // styling for Map
    const styles = {
      mapWidth: {
        height: 250
      }
    };

    return (
      <div>
          <div id="map" style={styles.mapWidth}> </div>
      </div>
    )
  }
}

export default AmbitMap;
