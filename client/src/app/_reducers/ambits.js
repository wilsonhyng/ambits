const ambits = (state = { ambits: [] }, action) => {
  switch (action.type) {
    case 'LOAD_AMBITS':
      return {
        ...state,
        ambits: action.ambits
      };
    case 'UPDATE_AMBIT':
      var i = state.ambits.findIndex(item => action.ambit.name === item.name)
      var a = state.ambits.slice();
      action.ambit.checkedIn = true;
      a[i] = action.ambit;
      console.log('altering state');
      return {
        ...state,
        ambits: a
      }
    default:
      return state;
  }
};

export default ambits;
