import React from 'react'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { Route } from 'react-router-dom'
import configureStore from '@store/'

const history = createHistory()
const store = configureStore({}, history)

export default ({ component }) => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route component={component}/>
      </ConnectedRouter>
    </Provider>
  )
}
