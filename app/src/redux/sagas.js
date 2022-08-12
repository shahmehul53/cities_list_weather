import {all, fork} from 'redux-saga/effects';
import weatherDetailSaga from './WeatherSaga';


function* rootSaga() {
 yield all([
    fork(weatherDetailSaga)
 ]);
}
 
export default rootSaga;