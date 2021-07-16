import { applyMiddleware, compose, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import rootReducer from 'reducers'

import loggerMiddleware from './logger'

export default function configureStore(preloadedState) {
  const middlewares = [loggerMiddleware, thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const enhancers = [middlewareEnhancer]
  const composedEnhancers = compose(...enhancers)

  const store = createStore(rootReducer, preloadedState, composedEnhancers)

  return store
}
