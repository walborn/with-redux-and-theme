import themeReducer, { ThemeState, set } from './slice'

describe('counter reducer', () => {
  const initialState: ThemeState = 'dark'
  it('should handle initial state', () => {
    expect(themeReducer(undefined, { type: 'unknown' })).toEqual('dark')
  })

  it('should handle increment', () => {
    const actual = themeReducer(initialState, set('light'))
    expect(actual).toEqual('light')
  })
})
