const ambits =
      (state = {
        title:  'Ambitually',
        ambits: [],
        day:    (new Date).getDay(),
        ambit:  {
          const fakeAmbitData = {
            refId: 1234,
            name: '',
            coords: {
              latitude: 37.784,
              longitude: -122.40903
            },
            weekdays:[false,false,false,false,false,false,false],
            startDate:'1970-1-1',
            checkIns:[]
          }
        }
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
      return {
        ...state,
        ambits: a
      };
    case 'UPDATE_TITLE':
      return {
        ...state,
        title: action.title
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
    default:
      return state;
  }
};

export default ambits;
