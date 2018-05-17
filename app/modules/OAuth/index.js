import {
  LOAD_TOKEN,
  LOAD_USER
} from './types'


export const initialState = {
  token: null,
  value: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        value: action.payload
      }
    case LOAD_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state
  }
}
