import {
  GET_WEATHER_DATA,
  RESPONSE_FAILURE,
  SET_WEATHER_DATA,
} from '../actions/ActionTypes';

const initialState = {
  cityData: {},
  error: {},
  // loading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        // loading: true
      };
    case SET_WEATHER_DATA:
      return {
        ...state,
        cityData: action.payload,
        //  loading: false,
      };
    case RESPONSE_FAILURE:
      return {
        ...state,
        error: action.error,
        //  loading: false,
      };

    default: {
      return state;
    }
  }
};
