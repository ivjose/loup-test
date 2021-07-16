/* eslint-disable jest/valid-expect-in-promise */
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { rest } from 'msw'

import { TYPE } from 'reducers/recipe'
import { recipe } from 'test-utils/data'

import { server } from 'mocks/server'

import { fetchRecipeById, resetFetchRecipeById } from './actionsRecipesById'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('action fetch Recipe', () => {
  // set up a fake store for all our tests

  it('should get Failed', () => {
    server.resetHandlers(
      rest.get('http://localhost:3030/recipes/:userId', (req, res, ctx) => res(ctx.status(500)))
    )
    const store = mockStore({})

    return store.dispatch(fetchRecipeById(5333)).then(() => {
      const expectedActions = [
        {
          type: TYPE.RECIPES_FETCH_BY_ID_LOADING,
        },
        {
          type: TYPE.RECIPES_FETCH_BY_ID_ERROR,
        },
      ]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should get Success', () => {
    const store = mockStore({})

    return store.dispatch(fetchRecipeById(5333)).then(() => {
      const expectedActions = [
        {
          type: TYPE.RECIPES_FETCH_BY_ID_LOADING,
        },
        {
          type: TYPE.RECIPES_FETCH_BY_ID_SUCCESS,
          payload: { ...recipe },
        },
      ]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it('should Reset', () => {
    const store = mockStore({})
    store.dispatch(resetFetchRecipeById()).then(() => {
      const expectedActions = [
        {
          type: TYPE.RECIPES_FETCH_BY_ID_RESET,
        },
      ]
      expect(store.getActions()).toEqual(expectedActions)
    })
  })
})
