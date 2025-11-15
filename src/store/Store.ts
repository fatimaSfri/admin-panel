
// import { configureStore ,type ThunkAction,type Action} from '@reduxjs/toolkit';
// import { persistStore } from 'redux-persist';
// import userReducer from './UserSlice';  
// import { persistedExchangeReducer } from './ExchangeSlice';

// export const store = configureStore({
//   reducer: {
//     user: userReducer,  
//     exchange: persistedExchangeReducer,
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware({
//       serializableCheck: false,  
//     }),
// });

// export const persistor = persistStore(store);

// // export type RootState = ReturnType<typeof store.getState>;
// // export type AppDispatch = typeof store.dispatch;


// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;



// src/store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import userReducer from './UserSlice';
import { persistedExchangeReducer } from './ExchangeSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    exchange: persistedExchangeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type AppRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);