// app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import registerDataReducer from './registerDataSlice';

export const store = configureStore({
  reducer: {
    registerData: registerDataReducer,
  },
});
