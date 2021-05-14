import { GET_SUBREDDIT, REQUEST_SUBREDDIT, FAILED_REQUEST } from "./type"

export const getSubreddt = (data) => {
  return {
    type: GET_SUBREDDIT,
    data,
  }
}

export const requestSubreddit = () => {
  return {
    type: REQUEST_SUBREDDIT,
  }
}

export const failedRequest = () => {
  return {
    type: FAILED_REQUEST,
  }
}
