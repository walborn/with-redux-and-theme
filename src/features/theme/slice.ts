import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'

export type ThemeState = 'dark' | 'light'
const initialState = 'dark' as ThemeState

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    inverse: (state) => {
      state = state === 'dark' ? 'light' : 'dark' 
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    set: (state, action: PayloadAction<ThemeState>) => action.payload,
  },
})

export const { inverse, set } = themeSlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.theme.value)`
export const selectTheme = (state: RootState) => state.theme

export default themeSlice.reducer
