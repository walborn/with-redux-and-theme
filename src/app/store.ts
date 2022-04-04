import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import themeReducer from '../features/theme/slice'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export type Dispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type Thunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
