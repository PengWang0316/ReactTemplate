import axios from 'axios';

import {
  USER_LOGOUT_SUCCESS, USER_LOGIN_SUCCESS, PARSER_USER_FROM_JWT_SUCCESS, FETCH_EVENTS_SUCCESS,
} from './ActionTypes';
import {
  API_REGISTER_USER, API_CHECK_USERNAME_AVAILABLE, API_JWTMESSAGE_VERIFY, API_LOGIN_WITH_PASSWORD,
  API_FETCH_EVENTS,
} from './ApiUrls';
import { JWT_MESSAGE } from '../config';

const userLogoutSuccess = () => ({
  type: USER_LOGOUT_SUCCESS,
  user: {}
});

const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  user
});

const parserUserFromJwtSuccess = user => ({
  type: PARSER_USER_FROM_JWT_SUCCESS,
  user
});

const fetchEventsSuccess = events => ({
  type: FETCH_EVENTS_SUCCESS,
  events,
});

export const emptyUser = () => userLoginSuccess({});

export const logout = () => dispatch => dispatch(userLogoutSuccess());

export const registerUser = user => dispatch => axios.post(API_REGISTER_USER, user)
  .then(({ data }) => { // After get user back, it to Redux and let Redux to presist it.
    dispatch(userLoginSuccess(data));
  })
  .catch(err => console.error(err));

export const loginWithPassword = ({ username, password }) => dispatch => axios.get(API_LOGIN_WITH_PASSWORD, { params: { username, password } }).then(({ data }) => {
  if (data) localStorage.setItem(JWT_MESSAGE, data.jwt);
  dispatch(userLoginSuccess(data));
}).catch(err => console.error(err));

export const checkUsernameAvailable = username => new Promise((resolve, reject) => axios.get(API_CHECK_USERNAME_AVAILABLE, { params: { username } })
  .then(({ data }) => resolve(data)).catch(err => console.error(err)));

export const parserUserFromJwt = jwtMessage => dispatch => axios.get(API_JWTMESSAGE_VERIFY, { params: { jwtMessage } })
  .then(({ data }) => dispatch(parserUserFromJwtSuccess(data))).catch(err => console.error(err));

export const fetchCalendarEvents = jwt => dispatch => {
  console.log('called');
  axios.get(API_FETCH_EVENTS, { params: { jwt } })
  .then(({ data }) => dispatch(fetchEventsSuccess(data)))
  .catch(err => console.error(err));
};
