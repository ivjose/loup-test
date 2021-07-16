import { recipes } from 'test-utils/data'
import reducer, { TYPE } from './recipes'

describe('audit recipes list', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ data: [], message: '', status: 'idle' })
  })

  it('should handle Loading', () => {
    const action = { type: TYPE.RECIPES_FETCH_LOADING }
    expect(reducer(undefined, action)).toEqual({
      data: [],
      message: '',
      status: 'loading',
    })
  })

  it('should handle Success', () => {
    const action = { type: TYPE.RECIPES_FETCH_SUCCESS, payload: [...recipes] }

    expect(reducer(undefined, action)).toEqual({
      data: [...recipes],
      message: 'Successfully get data',
      status: 'success',
    })
  })

  it('should handle Error', () => {
    const action = { type: TYPE.RECIPES_FETCH_ERROR }

    expect(reducer(undefined, action)).toEqual({
      data: [],
      message: 'Failed to get data',
      status: 'error',
    })
  })

  it('should handle Reset', () => {
    const action = { type: TYPE.RECIPES_FETCH_RESET }

    expect(reducer(undefined, action)).toEqual({
      data: [],
      message: '',
      status: 'idle',
    })
  })
})
