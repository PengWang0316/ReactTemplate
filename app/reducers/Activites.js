import {
  FETCH_ACTIVITES_SUCCESS,
} from '../actions/ActionTypes';

const activites = (state = null, action) => {
  switch (action.type) {
    case FETCH_ACTIVITES_SUCCESS:
      return action.activites;
    default:
      return state;
  }
};

export default activites;
