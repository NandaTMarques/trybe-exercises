import { requestSubreddit, getSubreddt, failedRequest } from '../store/actions/subreddit.action';

const url = (text) => `https://www.reddit.com/r/${text}.json`;

function fetchFromReddit(text) {
  return async (dispatch) => {
    try {
      dispatch(requestSubreddit());
      const response = await fetch(url(text));
      const result = await response.json();
      dispatch(getSubreddt(result.data.children)); 
    } catch {
      dispatch(failedRequest())
    }
  } 
}

export default fetchFromReddit;
