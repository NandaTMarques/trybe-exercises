import { GET_SUBREDDIT, REQUEST_SUBREDDIT, FAILED_REQUEST } from "../actions/type";

const INITIAL_STATE = {
  isLoading: false,
  posts: [],
  error: false
}

const subredditReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_SUBREDDIT:
      return {
        ...state, isLoading: false, posts: action.data,
      }
    case REQUEST_SUBREDDIT:
      return {
        ...state, isLoading: true, error: false,
      }
    case FAILED_REQUEST:
      return {
        ...state, isLoading: false, error: true,
      }
    default:
      return state
  }
} 

export default subredditReducer;
