import axios from 'axios';

import {
  FETCH_SUGGESTIONS_SUCCESS,
} from './ActionTypes';
import {
  API_FETCH_SUGGESTIONS,
} from './ApiUrls';

const fetchSuggestionsSuccess = (suggestions) => ({
  type: FETCH_SUGGESTIONS_SUCCESS,
  suggestions,
});

export const fetchSuggestions = () => dispatch => axios.get(API_FETCH_SUGGESTIONS)
  .then(({ data }) => dispatch(fetchSuggestionsSuccess(data)))
  .catch(err => console.log(err));

export default fetchSuggestions;
