import * as types from '../constants/ActionTypes.js';

const checkIn = function(ambit) {
  return {
    type: types.CHECKIN,
    ambit: ambit, //you can use habit, (as an object short notation in ES6)
    //this action should make a post request to the server

  };
};

const addAmbit = function(ambit) {
  return {
    type: types.ADD_AMBIT,
    ambit: ambit //you can use habit, (as an object short notation in ES6)
  };
};

