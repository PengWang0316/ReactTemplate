import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import user from './UserReducers';
import suggestions from './Suggestions';
import activites from './Activites';

export default combineReducers({
  activites,
  user,
  suggestions,
});
