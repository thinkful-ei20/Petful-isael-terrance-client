import { combineReducers } from 'redux';
import dogReducer from './dogs';
import catReducer from './cat';

const rootReducer = combineReducers({
  dogReducer,
  catReducer
});

export default rootReducer;