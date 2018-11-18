import {
  USER_LOGOUT_SUCCESS, USER_LOGIN_SUCCESS, PARSER_USER_FROM_JWT_SUCCESS, FETCH_EVENTS_SUCCESS,
} from '../actions/ActionTypes';

const user = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGOUT_SUCCESS:
    case USER_LOGIN_SUCCESS:
    case PARSER_USER_FROM_JWT_SUCCESS:
      return action.user;
    case FETCH_EVENTS_SUCCESS:
      return { ...state, events: action.events };
    default:
      return state;
  }
};

export default user;
