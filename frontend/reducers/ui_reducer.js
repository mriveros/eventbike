import {
  ENTER_TEXT,
  ENTER_PATH,
  DEMO_USER
} from '../actions/ui_actions'
import merge from 'lodash/merge'

const uiReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case ENTER_TEXT:
      return merge({}, {'text': action.text})
    case DEMO_USER:
      return merge({}, {user: action.user})
    case ENTER_PATH:
      return merge({}, {'path': action.text})
    default:
      return state;
  }
}

export default uiReducer;