import {GET_WEATHER_DATA, SET_WEATHER_DATA} from './ActionTypes';

export const getDataAction = payload => ({
  type: GET_WEATHER_DATA,
  payload: payload,
});

export const setDataAction = payload => ({
  type: SET_WEATHER_DATA,
  payload: payload,
});
