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
  currentUser: UserInfo | null;
  rememberMe: boolean;
  errors: { email?: string; password?: string };
};

const savedUser = localStorage.getItem('currentUser');
const initialState: UserState = {
  items: [],
  currentUser: savedUser ? JSON.parse(savedUser) : null,
  rememberMe: false,
  errors: {},
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInfo>) {
      // state.items = [...state.items, action.payload];
      state.items.push(action.payload);
    },
    setCurrentUser(state, action: PayloadAction<UserInfo | null>) {
      state.currentUser = action.payload;
    },
    loginUser: (state, action: PayloadAction<{ email: string; password: string; rememberMe: boolean }>) => {
  const { email, password, rememberMe } = action.payload;
  state.errors = {}; 

  const user = state.items.find(u => u.email === email);
  if (!user) {
    state.errors.email = 'ایمیل پیدا نشد! '; 
    state.currentUser = null;
    return;
  }
  if (user.password !== password) {
    state.errors.password = 'پسورد اشتباهه! ';
    state.currentUser = null;
    return;
  }
  if(user && user.password === password){
   state.currentUser = user;
  state.rememberMe = rememberMe;

   if (rememberMe) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  } else {
    localStorage.removeItem('currentUser');
  }

  }
}}
});


const persistConfig = {
  key: 'user',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['items'],
};

const userReducer = persistReducer<UserState>(persistConfig, userSlice.reducer);

export const { addUser ,loginUser} = userSlice.actions;
export default userReducer;  