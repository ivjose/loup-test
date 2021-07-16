export const TYPE = {
  RECIPES_FETCH_BY_ID_LOADING: 'RECIPES_FETCH_BY_ID_LOADING',
  RECIPES_FETCH_BY_ID_SUCCESS: 'RECIPES_FETCH_BY_ID_SUCCESS',
  RECIPES_FETCH_BY_ID_ERROR: 'RECIPES_FETCH_BY_ID_ERROR',
  RECIPES_FETCH_BY_ID_RESET: 'RECIPES_FETCH_BY_ID_RESET',
}

const initialState = {
  data: null,
  status: 'idle',
  message: '',
}

export default function recipes(state = initialState, action) {
  switch (action.type) {
    case TYPE.RECIPES_FETCH_BY_ID_LOADING:
      return {
        ...state,
        status: 'loading',
      }
    case TYPE.RECIPES_FETCH_BY_ID_SUCCESS:
      return {
        ...state,
        data: { ...action.payload },
        status: 'success',
        message: 'Successfully get data',
      }
    case TYPE.RECIPES_FETCH_BY_ID_ERROR:
      return {
        ...state,
        status: 'error',
        message: 'Failed to get data',
      }
    case TYPE.RECIPES_FETCH_BY_ID_RESET:
      return {
        ...initialState,
      }
    default:
      return state
  }
}
