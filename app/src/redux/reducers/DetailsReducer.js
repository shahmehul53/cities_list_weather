const initialState = {
  cityData: {},
};

export default (state = initialState, action) => {
  console.log('in reducer', state, action.type, action.payload);
  console.log('action', action);
  switch (action.type) {
    case 'GET_WEATHER_DATA':
      return {
        ...state,
        //  cityData: action.payload,
        //  loading: false,
      };
    case 'SET_WEATHER_DATA':
      console.log('action success', action);
      return {
        ...state,
        cityData: action.payload,
        //  loading: false,
      };

    default: {
      return state;
    }
  }
};
