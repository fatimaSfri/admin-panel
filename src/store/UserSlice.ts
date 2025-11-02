import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";  

export interface UserInfo {
  userName: string;
  email: string;
  password: string;  
}

type UserState = {
   items: UserInfo[] 
  };

const initialState:UserState = {
  items: []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInfo>) {
      state.items = [...state.items, action.payload];  
    }
  }
});


const persistConfig = {
  key: 'user',
  storage,
  stateReconciler: autoMergeLevel2,  
  whitelist: ['items'],  
};

const userReducer = persistReducer<UserState>(persistConfig, userSlice.reducer);  

export const { addUser } = userSlice.actions;
export default userReducer;  