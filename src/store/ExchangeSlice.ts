// src/store/slices/exchangeSlice.ts
import { createSlice,type PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

interface Currency {
  label: string;
  value: string;
  rateToUSD: number;
  icon: string;
}

interface ExchangeData {
  fromCurrency: Currency;
  toCurrency: Currency;
  fromAmount: string;
  toAmount: string;
}

interface ExchangeState {
  data: ExchangeData | null;
}

const initialState: ExchangeState = {
  data: null,
};

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState,
  reducers: {
    setExchangeData: (state, action: PayloadAction<ExchangeData>) => {
      state.data = action.payload;
    },
    clearExchangeData: (state) => {
      state.data = null;
    },
  },
});

export const { setExchangeData, clearExchangeData } = exchangeSlice.actions;


const persistConfig = {
  key: 'exchange',
  storage,
  whitelist: ['data'],
};

export const persistedExchangeReducer = persistReducer(persistConfig, exchangeSlice.reducer);
export default exchangeSlice.reducer;