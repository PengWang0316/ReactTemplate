import { combineReducers } from 'redux';
// import { routerReducer } from 'react-router-redux';

import user from './UserReducers';

export default combineReducers({
  user,
});
