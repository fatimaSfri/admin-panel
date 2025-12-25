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
  userForgot: { email: string } | null;
};

const savedUser = localStorage.getItem('currentUser');
const initialState: UserState = {
  items: [],
  currentUser: savedUser ? JSON.parse(savedUser) : null,
  rememberMe: false,
  errors: {},
  userForgot: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser(state, action: PayloadAction<UserInfo>) {
      // state.items = [...state.items, action.payload];
      state.items.push(action.payload);
    },
    loginUser: (state, action: PayloadAction<{ email: string; password: string; rememberMe: boolean }>) => {
      const { email, password, rememberMe } = action.payload;
      state.errors = {};

      const user = state.items.find(u => u.email === email);
      if (!user) {
        state.errors.email = 'The Email Entered Is Invalid ';
        state.currentUser = null;
        return;
      }
      if (user.password !== password) {
        state.errors.password = 'The Password Entered Is Invalid';
        state.currentUser = null;
        return;
      }
      if (user && user.password === password) {
        state.currentUser = user;
        state.rememberMe = rememberMe;

        if (rememberMe) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        } else {
          localStorage.removeItem('currentUser');
        }
      }
    },
    checkEmail: (state, action: PayloadAction<{ email: string; }>) => {
      const { email } = action.payload;
      state.errors = {};
      const user = state.items.find(u => u.email === email);
      if (user) {
        state.userForgot = user;
      } else {
        state.errors.email = 'The Email Entered Is Invalid';
        state.userForgot = null;
      }
    },
    resetPassword(state, action: PayloadAction<{ password: string }>) {
      const { password } = action.payload;
      if (state.userForgot) {
        const index = state.items.findIndex(u => u.email === state.userForgot!.email);
        if (index !== -1) {
          state.items[index].password = password;
        }
      }
    },

    updateUser(state, action: PayloadAction<UserInfo>) {
      const updated = action.payload;
      const index = state.items.findIndex(
        u => u.email === state.currentUser?.email
      );
      if (index !== -1) {
        state.items[index] = updated;
      }
      state.currentUser = updated;
    },
    logout(state) {
      state.currentUser = null;
      state.rememberMe = false;
      state.errors = {};
    }
  },
});


const persistConfig = {
  key: 'user',
  storage,
  stateReconciler: autoMergeLevel2,
 whitelist: ['items', 'currentUser']
};

const userReducer = persistReducer<UserState>(persistConfig, userSlice.reducer);

export const { addUser, loginUser, checkEmail, resetPassword, updateUser, logout } = userSlice.actions;
export default userReducer;  








