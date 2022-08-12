import {call, put, takeLatest, all} from 'redux-saga/effects';
import {getData} from '../api';

function* weatherData({payload}) {
  console.log('in saga', payload);
  try {
    const response = yield call(getData, payload);
    console.log('response in saga', response);
    yield put({type: 'SET_WEATHER_DATA', payload: response});
    //    yield put({type: 'RESPONSE_REQUEST',payload: "XYZ"});
  } catch (error) {
    yield put({type: 'RESPONSE_FAILURE', error: error.message});
  }
}
export default function* weatherDetailSaga() {
  //  yield all([takeLatest('RESPONSE_REQUEST', weatherData)])
  yield takeLatest('GET_WEATHER_DATA', weatherData);
}
