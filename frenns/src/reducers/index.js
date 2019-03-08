import { combineReducers } from 'redux';

import frenns from './frenns';
import error from './error';

export default combineReducers({
  frenns,
  error
});
