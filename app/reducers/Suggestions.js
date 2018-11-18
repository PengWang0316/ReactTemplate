import {
  FETCH_SUGGESTIONS_SUCCESS,
} from '../actions/ActionTypes';

const suggestions = (state = null, action) => {
  switch (action.type) {
    case FETCH_SUGGESTIONS_SUCCESS: {
      const suggestionObj = {};
      action.suggestions.forEach(suggestion => { suggestionObj[suggestion.id] = suggestion; });
      return suggestionObj;
    }
    default:
      return state;
  }
};

export default suggestions;
