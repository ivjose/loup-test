import { recipe } from 'test-utils/data'
import reducer, { TYPE } from './recipe'

describe('Recipe', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ data: null, message: '', status: 'idle' })
  })

  it('should handle Loading', () => {
    const action = { type: TYPE.RECIPES_FETCH_BY_ID_LOADING }
    expect(reducer(undefined, action)).toEqual({
      data: null,
      message: '',
      status: 'loading',
    })
  })

  it('should handle Success', () => {
    const action = { type: TYPE.RECIPES_FETCH_BY_ID_SUCCESS, payload: { ...recipe } }

    expect(reducer(undefined, action)).toEqual({
      data: { ...recipe },
      message: 'Successfully get data',
      status: 'success',
    })
  })

  it('should handle Error', () => {
    const action = { type: TYPE.RECIPES_FETCH_BY_ID_ERROR }

    expect(reducer(undefined, action)).toEqual({
      data: null,
      message: 'Failed to get data',
      status: 'error',
    })
  })

  it('should handle Reset', () => {
    const action = { type: TYPE.RECIPES_FETCH_BY_ID_RESET }

    expect(reducer(undefined, action)).toEqual({
      data: null,
      message: '',
      status: 'idle',
    })
  })
})
