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
      center: ambitLocation
    });

    let marker = new googleMaps.Marker({
      position: ambitLocation,
      map: map
    });

    // Awful, impure pattern, fix ?????
    this.mapInstance = map;
    this.centerMarker = marker;
    this.googleMaps = googleMaps;
  }

  render() {
    // styling for Map GridList
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
