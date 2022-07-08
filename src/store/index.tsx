import { configureStore } from '@reduxjs/toolkit';
import submenuSlice from './slices/submenuSlice';

export const store = configureStore({
  reducer: {
    submenu: submenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
