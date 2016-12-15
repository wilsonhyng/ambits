const ambits =
      (state = {
        title: 'Ambitually',
        ambits: []
      }, action) => {
  switch (action.type) {
    case 'LOAD_AMBITS':
      return {
        ...state,
        ambits: action.ambits
      };
    case 'UPDATE_AMBIT':
      var i = state.ambits.findIndex(item => action.ambit.name === item.name)
      var a = state.ambits.slice();
      a[i] = action.ambit;
      console.log('altering state');
      return {
        ...state,
        ambits: a
      };
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.title
      };
    default:
      return state;
  }
};

export default ambits;
