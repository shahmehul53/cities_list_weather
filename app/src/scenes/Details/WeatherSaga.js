import {call, put, takeLatest, all} from 'redux-saga/effects';
import {getData} from '../../api/weatherDetailApi';
import {
  GET_WEATHER_DATA,
  RESPONSE_FAILURE,
  SET_WEATHER_DATA,
} from '../../redux/actions/ActionTypes';

function* weatherData({payload}) {
  try {
    const response = yield call(getData, payload);
    yield put({type: SET_WEATHER_DATA, payload: response});
  } catch (error) {
    yield put({type: RESPONSE_FAILURE, error: error.message});
  }
}
export default function* weatherDetailSaga() {
  yield takeLatest(GET_WEATHER_DATA, weatherData);
}
