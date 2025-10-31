import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

import type { AppDispatch, RootState } from './Store'

type DispatchFunction = () => AppDispatch

export const useInfoDispatch: DispatchFunction = useDispatch

export const useInfoSelector: TypedUseSelectorHook<RootState> = useSelector
