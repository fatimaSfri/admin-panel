// import {configureStore } from "@reduxjs/toolkit";
// import reducer from "./UserSlice";

//  const store = configureStore({
//     reducer:{
//       user:reducer 
//     },

// })


// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// export default store

import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import userReducer from './UserSlice';  // مسیر رو درست کن

export const store = configureStore({
  reducer: {
    user: userReducer,  // حالا persisted از slice می‌آد
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,  // fix همه errorهای non-serializable – ساده!
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;