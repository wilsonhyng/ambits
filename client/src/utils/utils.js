//helper functions
const validateLocation = function (current, checkin) {

};

const postCheckin = function (ambit) {

};

const checkinAmbit = function(ambit) {
  //get current location
  if (navigator.geolocation) {
  /* geolocation is available */
  navigation.geolocation.getCurrentPosition(function(position) {
    var coordinates = position.coords;
    if(validatePosition(ambit.location, coordinates)) {
      //send post req. to server
    } else {
      //inform user that it is not a valid checkin attempt
    }
});


}

export { checkinAmbit };

 