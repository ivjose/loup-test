/* eslint-disable react/prop-types */
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { render as rtlRender } from '@testing-library/react'

import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
// Import your own reducer
import rootReducer from 'reducers'

const middlewares = [thunkMiddleware]
const middlewareEnhancer = applyMiddleware(...middlewares)

const enhancers = [middlewareEnhancer]
const composedEnhancers = compose(...enhancers)

function render(
  ui,
  {
    route = '/',
    initialState,
    store = createStore(rootReducer, { ...initialState }, composedEnhancers),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    )
  }

  window.history.pushState({}, 'Test page', route)

  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

// re-export everything
export * from '@testing-library/react'
// override render method
export { render }
