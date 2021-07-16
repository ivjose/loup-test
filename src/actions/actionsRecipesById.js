import { TYPE } from 'reducers/recipe'
import http from 'utils/api'

export const fetchRecipeById = (id) => async (dispatch) => {
  dispatch({ type: TYPE.RECIPES_FETCH_BY_ID_LOADING })

  try {
    const response = await http.get(`/recipes/${id}`)

    dispatch({ type: TYPE.RECIPES_FETCH_BY_ID_SUCCESS, payload: response.data })
  } catch (error) {
    dispatch({ type: TYPE.RECIPES_FETCH_BY_ID_ERROR })
  }
}

export const resetFetchRecipeById = () => async (dispatch) =>
  dispatch({ type: TYPE.RECIPES_FETCH_BY_ID_RESET })
