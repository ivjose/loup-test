import { TYPE } from 'reducers/recipes'
import http from 'utils/api'

export const fetchRecipes = () => async (dispatch) => {
  dispatch({ type: TYPE.RECIPES_FETCH_LOADING })

  try {
    const response = await http.get('/recipes')

    dispatch({ type: TYPE.RECIPES_FETCH_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: TYPE.RECIPES_FETCH_ERROR })
  }
}

export const resetRecipes = () => async (dispatch) => dispatch({ type: TYPE.RECIPES_FETCH_RESET })
