import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook,
} from 'react-redux'

import type { AppDispatch, AppRootState } from './Store'

type DispatchFunction = () => AppDispatch

export const useInfoDispatch: DispatchFunction = useDispatch

export const useInfoSelector: TypedUseSelectorHook<AppRootState> = useSelector




// import { useDispatch, useSelector, type TypedUseSelectorHook,
// } from 'react-redux'
// import type { AppDispatch, AppRootState } from './Store' 
// type DispatchFunction = () => AppDispatch
// export const useInfoDispatch: DispatchFunction = useDispatch
// export const useInfoSelector: TypedUseSelectorHook<AppRootState> = useSelector