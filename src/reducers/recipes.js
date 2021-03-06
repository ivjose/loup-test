export const TYPE = {
  RECIPES_FETCH_LOADING: 'RECIPES_FETCH_LOADING',
  RECIPES_FETCH_SUCCESS: 'RECIPES_FETCH_SUCCESS',
  RECIPES_FETCH_ERROR: 'RECIPES_FETCH_ERROR',
  RECIPES_FETCH_RESET: 'RECIPES_FETCH_RESET',
}

const initialState = {
  data: [],
  status: 'idle',
  message: '',
}

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case TYPE.RECIPES_FETCH_LOADING:
      return {
        ...state,
        status: 'loading',
      }
    case TYPE.RECIPES_FETCH_SUCCESS:
      return {
        ...state,
        data: [...action.payload],
        status: 'success',
        message: 'Successfully get data',
      }
    case TYPE.RECIPES_FETCH_ERROR:
      return {
        ...state,
        status: 'error',
        message: 'Failed to get data',
      }
    case TYPE.RECIPES_FETCH_RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
