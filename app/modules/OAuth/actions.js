import {
  LOAD_TOKEN
} from './types'

export const loadToken = (data = {}) => {
  return dispatch => {
    return new Promise(
      resolve => {
        dispatch({
          type: LOAD_TOKEN,
          payload: data
        })
        resolve()
      }
    )
  }
}
