import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

export default combineReducers({
  app: require('./App').default,
  oauth: require('./OAuth').default,
  router: routerReducer
});
