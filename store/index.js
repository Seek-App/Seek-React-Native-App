'use strict'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import getRootReducer from './reducer'
import AppNavigator from '../StackNav'

const navReducer = (state, action) => {
  const newState = AppNavigator.router.getStateForAction(action, state)
  return newState || state
}

const store = createStore(
  getRootReducer(navReducer),
  undefined,
  applyMiddleware(thunk)
)

export default store
