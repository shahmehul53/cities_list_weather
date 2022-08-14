import {all, fork} from 'redux-saga/effects';
import weatherDetailSaga from '../../scenes/Details/WeatherSaga';

function* rootSaga() {
  yield all([fork(weatherDetailSaga)]);
}

export default rootSaga;
