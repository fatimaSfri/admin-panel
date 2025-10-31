import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";  // این import رو اضافه کن!

export interface UserInfo {
  userName: string;
  email: string;
  password: string;  // حتماً string!
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
      state.items = [...state.items, action.payload];  // spread – fix برای array merge
    }
  }
});

// persist config per-slice (fix برای nested)
const persistConfig = {
  key: 'user',
  storage,
  stateReconciler: autoMergeLevel2,  // merge nested array/object – fix اصلی!
  whitelist: ['items'],  // فقط items رو persist کن (نه کل state)
};

const userReducer = persistReducer<UserState>(persistConfig, userSlice.reducer);  // export persisted reducer

export const { addUser } = userSlice.actions;
export default userReducer;  // حالا persisted رو export کن