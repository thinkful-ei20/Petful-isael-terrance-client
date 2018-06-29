import { combineReducers } from 'redux';
import dogReducer from './dogs';
import catReducer from './cats';

const rootReducer = combineReducers({
  dogReducer,
  catReducer
});

export default rootReducer;