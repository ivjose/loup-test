/* eslint-disable jest/valid-expect-in-promise */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { rest } from 'msw'

import { TYPE } from 'reducers/recipes'
import { recipes } from 'test-utils/data'

import { server } from 'mocks/server'

import { fetchRecipes, resetRecipes } from './actionsRecipes'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('action fetch all Recipes', () => {
  // set up a fake store for all our tests

  it('should get Failed', () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/recipes', (req, res, ctx) => res(ctx.status(500)))
    )
    const store = mockStore({})

    return store.dispatch(fetchRecipes()).then(() => {
      const expectedActions = [
        {
          type: TYPE.RECIPES_FETCH_LOADING,
        },
        {
          type: TYPE.RECIPES_FETCH_ERROR,
        },
      ]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should get Success', () => {
    const store = mockStore({})

    return store.dispatch(fetchRecipes()).then(() => {
      const expectedActions = [
        {
          type: TYPE.RECIPES_FETCH_LOADING,
        },
        {
          type: TYPE.RECIPES_FETCH_SUCCESS,
          payload: [...recipes],
        },
      ]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should Reset', () => {
    const store = mockStore({})
    store.dispatch(resetRecipes()).then(() => {
      const expectedActions = [
        {
          type: TYPE.RECIPES_FETCH_RESET,
        },
      ]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
