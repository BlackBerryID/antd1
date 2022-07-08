import { configureStore } from '@reduxjs/toolkit';
import submenuSlice from './slices/submenu-slice';
import cardListSlice from './slices/card-list-slice';

export const store = configureStore({
  reducer: {
    submenu: submenuSlice,
    cardList: cardListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
