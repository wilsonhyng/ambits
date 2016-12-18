const ambits =
      (state = {
        title:    'Ambitually',
        ambits:   [],
        day:      (new Date).getDay(),
        ambit:    null,
        disabled: true,
        editAmbit: null
      }, action) => {
  switch (action.type) {
    case 'LOAD_AMBITS':
      return {
        ...state,
        ambits: action.ambits
      };
    case 'UPDATE_AMBIT':
      var i = state.ambits.findIndex(item => action.ambit._id === item._id)
      var a = state.ambits.slice();
      a[i] = action.ambit;
      return {
        ...state,
        ambits: a
      };
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.title
      };
    case 'EDIT_CUR_BIT':
      return {
        ...state,
        editAmbit: action.editAmbit
      };
    case 'UPDATE_CUR_DAY':
      return {
        ...state,
        day: action.day
      };
    case 'UPDATE_CUR_BIT':
      return {
        ...state,
        ambit: action.ambit
      };
    case 'DELETE_AMBIT':
      var i = state.ambits.findIndex(item => action.ambit._id === item._id)
      var a = state.ambits.splice(i, 1);
      return {
        ...state,
        ambits: a
      };
    case 'IS_DISABLED':
      return {
        ...state,
        disabled: action.bool
      };
    default:
      return state;
  }
};

export default ambits;
