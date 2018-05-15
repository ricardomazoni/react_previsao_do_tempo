import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  weater: WeatherReducer
})

export default rootReducer;
