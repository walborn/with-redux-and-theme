import * as Redux from 'react-redux'
import type { RootState, Dispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch = () => Redux.useDispatch<Dispatch>()
export const useSelector: Redux.TypedUseSelectorHook<RootState> = Redux.useSelector
