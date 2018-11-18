import axios from 'axios';

import {
  FETCH_ACTIVITES_SUCCESS,
} from './ActionTypes';
import {
  API_FETCH_ACTIVITES,
} from './ApiUrls';

const fetchActivitessSuccess = (activites) => ({
  type: FETCH_ACTIVITES_SUCCESS,
  activites,
});

export const fetchActivites = () => dispatch => axios.get(API_FETCH_ACTIVITES)
  .then(({ data }) => dispatch(fetchActivitessSuccess(data)))
  .catch(err => console.log(err));

export default fetchActivites;
