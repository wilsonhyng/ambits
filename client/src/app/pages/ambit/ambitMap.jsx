import React              from 'react';
import {Component}        from 'react';
import loadGoogleMapsAPI  from 'load-google-maps-api';

let loadedGoogleMaps = undefined;

class AmbitMap extends Component {
  constructor(props) {
    super(props);
  }

  // When the component mounts, initialze the map
  componentDidMount() {

    if (loadedGoogleMaps === undefined) {
      loadGoogleMapsAPI({
        // This is public; restricted by IP
        key: "AIzaSyAHJfNJp8pbRxf_05L1TIm5ru-Dvcla-Nw",
        v: '3.25'
      })
      .then((googleMaps) => {
        // when googlMaps is ready pass it to initMap method
        loadedGoogleMaps = googleMaps;
        this.initMap(loadedGoogleMaps);
      });
    } else {
        this.initMap(loadedGoogleMaps);
    }
  }

  // initialize the map with a marker at ambitLocation
  initMap(googleMaps) {
    let selectedAmbit = this.props.ambit;

    let ambitLocation = {
      lat: selectedAmbit.coords.latitude,
      lng: selectedAmbit.coords.longitude
    }

    let map = new googleMaps.Map(document.getElementById('map'), {
      zoom: 16,
      disableDefaultUI: true,
      draggable: false,
      scrollwheel: false,
      panControl: false,
      center: ambitLocation,
    });

    let targetMarker = new googleMaps.Marker({
      position: ambitLocation,
      map: map
    });

    // showMyLocation (getting curr loc takes sometime)
    this.showMyLocation(googleMaps, map, ambitLocation)
  }

  // Use HTML5 geolocation to find the current location
  // getMyPosition Using Promise and place a blue dot on the map
  showMyLocation(googleMaps, map, ambitLocation) {
    const getMyPosition = () => {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });
    }

    getMyPosition()
      .then((position) => {

        // concert position to Google Map convention
        let myLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        let midLocation = {
          lat: (myLocation.lat + ambitLocation.lat)/2,
          lng: (myLocation.lng + ambitLocation.lng)/2
        };

        //extend the bounds to include each marker's position
        let bounds = new googleMaps.LatLngBounds();
        bounds.extend(new googleMaps.LatLng(myLocation.lat, myLocation.lng));
        bounds.extend(new googleMaps.LatLng(ambitLocation.lat, ambitLocation.lng));

        // place a blue dot on my current locaiton
        let myLocMarker = new googleMaps.Marker({
          position: myLocation,
          map: map,
          icon: 'http://www.robotwoods.com/dev/misc/bluecircle.png'
        });

        //now fit the map to the newly inclusive bounds
        map.fitBounds(bounds);

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
