const initialState = {
  ambits:[],
}

const ambits = function(state=initialState, action) {

  switch(action.type) {
    case CHECKIN: return {
      


    };
    case ADD_AMBIT: return console.log('added an ambit');
    default: return state;
  }

};

export {ambits as default};