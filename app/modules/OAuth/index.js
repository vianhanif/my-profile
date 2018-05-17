import {
  LOAD_TOKEN
} from './types'


export const initialState = {
  value: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_TOKEN:
      return {
        ...state,
        value: action.payload
      }
    default:
      return state
  }
}
