//https://github.com/appacademy/curriculum/blob/master/react/projects/bench_bnb/solution/frontend/reducers/session_errors_reducer.js
import {
  RECEIVE_SESSION_ERRORS,
  RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return state; //may cause issues
    default:
      return state;
  }
};