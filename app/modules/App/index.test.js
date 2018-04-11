import React from 'react'
import createHistory from 'history/createBrowserHistory';
import renderer from 'react-test-renderer'
import colors from 'colors'
import configureStore from '@store/'
import * as actions from './actions'

const green = (text) => colors.green(colors.bold(text))
const yellow = (text) => colors.bgBlack(colors.yellow(colors.bold(text)))
const history = createHistory()
const store = configureStore({}, history)

describe('Module::App', () => {

  it(`Actions::loadData`, () => {
    expect(store.getState().app.value).toEqual(null)
    let data = {
      id: 0
    }
    return store.dispatch(actions.loadData(data)).then(() => {
      let payload = {
        request: {
          ...data
        },
        response: {
          title: 'dummy'
        }
      }
      expect(store.getState().app.value).toEqual(payload)
    })
  })

})
