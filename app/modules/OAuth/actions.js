import axios from 'axios'
import {
  LOAD_TOKEN,
  LOAD_USER
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

export const loadUser = (data = {}) => {
  return (dispatch, getState) => {
    return new Promise(
      resolve => {
        axios.create({
          headers: {
            'Authorization': `token ${getState().oauth.token}`
          }
        }).get('https://api.github.com/user').then(
          response => {
            dispatch({
              type: LOAD_USER,
              payload: response.data
            })
            resolve()
          }
        ).catch(
          error => {
            dispatch({
              type: LOAD_USER,
              payload: { email: null}
            })
            resolve()
          }
        )
      }
    )
  }
}
