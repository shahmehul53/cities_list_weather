//define combine reducer here

import {combineReducers} from 'redux';
import DetailsReducer from './DetailsReducer';

const rootReducer = combineReducers({
  details: DetailsReducer,
});

export default rootReducer;
