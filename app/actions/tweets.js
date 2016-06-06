import { polyfill } from 'es6-promise';
import request from 'axios';
import * as types from 'types';

polyfill();

function makeTweetsRequest(method, data, api = '/tweets') {
  return request({
    url: api,
    method,
    data,
    withCredentials: true
  });
}

export function fetchReversimTweets() {
  return (dispatch, getState) => {
    const { tweets: { reversim } } = getState();

    if (reversim.length == 0) {
      dispatch({
        type: types.GET_REVERSIM_TWEETS_REQUEST
      });

      return makeTweetsRequest('get', null, '/tweets/reversim')
      .then(res => {
          if (res.status === 200) {
            return dispatch({
              type: types.GET_REVERSIM_TWEETS_SUCCESS,
              tweets: res.data
            });
          }
        })
      .catch(() => {
        return dispatch({
          type: types.GET_REVERSIM_TWEETS_FAILURE
        });
      });
    }
  }
}
